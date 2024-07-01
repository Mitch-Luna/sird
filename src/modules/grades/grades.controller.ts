import { Body, Controller, Get, Post } from "@nestjs/common";
import { GradesDto } from "./grades.dto";


@Controller('grades')

export class GradesController{
    constructor (private readonly gradesService: GradesService){}

    @Post ('/')
    async createGrades(@Body() payload: GradesDto){
        const newGrades = await this.gradesService.created(payload);
        const data = {
            data: newGrades,
            message: 'created',
        }
        return data;
    }

    @Get('/')
    async getGrades(){ 
    const grades = await this.gradesService.getGrades();
    const data = {
        data : grades,
        message: 'ok',
    };
    return data;
    }
}