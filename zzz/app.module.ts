import { Module } from '@nestjs/common';
import { toursModule } from './tours/tours.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [toursModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
