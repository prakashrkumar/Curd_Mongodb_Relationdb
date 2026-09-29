import { Controller, Post ,Get} from '@nestjs/common';
import { ProjectService } from './project.service.js';

@Controller('project')
export class ProjectController {
    constructor(private readonly service:ProjectService){}
    @Post('seed')
    seeData(){
     return this.service.seed()   
    }
    @Get('developers')
    getDevelopers(){
        return this.service.getDevelopers()
    }
    @Get('projects')
    getProject(){
        return this.service.getProjects()
    }
}
