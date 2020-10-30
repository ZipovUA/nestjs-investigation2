import { Module } from '@nestjs/common';
import { SeasonResultsController } from './seasonResults.controller';
import { SeasonResultsService } from './seasonResults.service';


@Module({
  imports: [],
  controllers: [SeasonResultsController],
  providers: [SeasonResultsService],
})
export class SeasonResultsModule {}
