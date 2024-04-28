import { Injectable, HttpStatus } from '@nestjs/common';
import { tour } from './entities/tour.entity';
import { create } from 'domain';
import { DatasourceService } from 'src/datasource/datasource.service';

@Injectable()
export class toursService {
    constructor(private readonly datasourceService: DatasourceService) {}

    create(tour: tour) {
        this.datasourceService.gettours().push(tour);
        return tour;
    }

    findOne(id: number) {
        return this.datasourceService
            .gettours()
            .find((tour) => tour.id === id);
    }

    findAll(): tour[] {
        return this.datasourceService.gettours();
    }

    update(id: number, updatedtour: tour) {
        const index = this.datasourceService
            .gettours()
            .findIndex((tour) => tour.id === id);
        this.datasourceService.gettours()[index] = updatedtour;
        return this.datasourceService.gettours()[index];
    }

    remove(id: number) {
        const index = this.datasourceService
        .gettours()
        .findIndex((tour) => tour.id === id);
        this.datasourceService.gettours().splice(index, 1);
        return HttpStatus.OK;
    }
}
