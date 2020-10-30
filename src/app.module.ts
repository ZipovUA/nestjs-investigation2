import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from './modules/matches/matches.module';
import { SeasonResultsModule } from './modules/seasonResults/seasonResults.module';
import { LoadMatchesModule } from './modules/loadMatches/loadMatches.module';

@Module({
  imports: [MatchesModule, SeasonResultsModule, LoadMatchesModule, MongooseModule.forRoot('mongodb://localhost/FootballStats')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
