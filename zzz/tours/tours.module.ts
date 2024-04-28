import { Module } from '@nestjs/common';
import { tour } from './entities/tour.entity';
import { toursService } from './tours.service';
import { toursController } from './tours.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
  controllers: [toursController],
  providers: [toursService],
  imports: [tour, DatasourceModule],
})
export class toursModule {}
