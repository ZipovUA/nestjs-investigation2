import { Controller, Get } from '@nestjs/common';
import { SeasonResultsService } from './seasonResults.service';

@Controller('seasonresults')
export class SeasonResultsController {
  constructor(private readonly seasonResultsService: SeasonResultsService) {}

  @Get()
  getHello(): string {
    return this.seasonResultsService.getHello();
  }
}
