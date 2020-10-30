import { Controller, Get } from '@nestjs/common';
import { LoadMatchesService } from './loadMatches.service';

@Controller('loadmatches')
export class LoadMatchesController {
  constructor(private readonly loadmatchesService: LoadMatchesService) {}

  @Get()
  getHello(): string {
    return this.loadmatchesService.getHello();
  }

  @Get('getexternal')
  async getExternal(): Promise<any> {
    return await this.loadmatchesService.getExternal();
  }
}
