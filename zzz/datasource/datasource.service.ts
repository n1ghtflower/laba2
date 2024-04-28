import { Injectable } from '@nestjs/common';
import { tour } from 'src/tours/entities/tour.entity';

@Injectable()
export class DatasourceService {
    private tours: tour[] = [];

    gettours(): tour[] {
        return this.tours;
    }
}