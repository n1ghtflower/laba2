import { toursService } from './tours.service';
import { tour } from './entities/tour.entity';
import { Controller, Get, Param, Put, Body, Post, Delete } from "@nestjs/common";

@Controller('tours')
export class toursController {
    constructor(private readonly toursService: toursService) {}

    @Get()  
    findAll() {
        return this.toursService.findAll();
    }

    @Get(':id')
    findOne (@Param('id') id: string) {
        return this.toursService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updatetour: tour) {
        return this.toursService.update(+id, updatetour);
    }

    @Post()
    create(@Body() createtour: tour) {
        return this.toursService.create(createtour);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.toursService.remove(+id);
    }
}
