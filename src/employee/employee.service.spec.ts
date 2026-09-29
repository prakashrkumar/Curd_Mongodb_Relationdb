import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { EmployeeService } from './employee.service.js';
import { Employee } from './schemas/employee.schema.js';
import { Profile } from './schemas/profile.schema.js';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(async () => {
    const profileSave = vi.fn().mockResolvedValue({
      _id: 'profile-1',
      age: 20,
      qualification: 'B.Tech',
    });

    const employeeSave = vi.fn().mockResolvedValue({
      _id: 'emp-1',
      name: 'Prkash',
      profile: 'profile-1',
    });

    class ProfileModel {
      age: number;
      qualification: string;
      save = profileSave;

      constructor(data: { age: number; qualification: string }) {
        Object.assign(this, data);
      }
    }

    class EmployeeModel {
      name: string;
      profile: string;
      save = employeeSave;

      constructor(data: { name: string; profile: string }) {
        Object.assign(this, data);
      }
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmployeeService,
        {
          provide: getModelToken(Employee.name),
          useValue: EmployeeModel,
        },
        {
          provide: getModelToken(Profile.name),
          useValue: ProfileModel,
        },
      ],
    }).compile();

    service = module.get<EmployeeService>(EmployeeService);
  });

  it('should create an employee with profile age and qualification', async () => {
    const result = await service.createEmployee();
    expect(result).toMatchObject({
      name: 'Prkash',
      profile: 'profile-1',
    });
  });

  it('should populate profile fields when fetching all employees', async () => {
    const populate = vi.fn().mockReturnThis();
    const exec = vi.fn().mockResolvedValue([
      {
        _id: 'emp-1',
        name: 'Prkash',
        profile: { age: 20, qualification: 'B.Tech' },
      },
    ]);

    const employeeModel = {
      find: vi.fn().mockReturnValue({ populate, exec }),
    };

    const serviceWithInjectedModel = new EmployeeService(
      employeeModel as any,
      {} as any,
    );

    const result = await serviceWithInjectedModel.findAll();

    expect(populate).toHaveBeenCalledWith({
      path: 'profile',
      select: 'age qualification',
    });
    expect(result[0].profile).toMatchObject({
      age: 20,
      qualification: 'B.Tech',
    });
  });
});
