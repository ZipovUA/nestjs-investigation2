import { Module, HttpModule } from '@nestjs/common';
import { LoadMatchesController } from './loadMatches.controller';
import { LoadMatchesService } from './loadMatches.service';

@Module({
  imports: [HttpModule],
  controllers: [LoadMatchesController],
  providers: [LoadMatchesService],
})
export class LoadMatchesModule {}
