import { Injectable, HttpService } from '@nestjs/common';
//import { AxiosResponse } from 'axios'
//import { Observable } from 'rxjs'
import IMatch from '../../dataStructures/IMatch';

@Injectable()
export class LoadMatchesService {
  constructor(private httpService: HttpService) {}
  
  getHello(): string {
    return 'Hello World! (from load matches)';
  }

  //async getExternal(): Promise<Observable<AxiosResponse<IMatch[]>>> {
  async getExternal(): Promise<IMatch[]> {
  const fullMatchInfo = await (await this.httpService.get('https://api.jsonbin.io/b/5ebb0cf58284f36af7ba1779/1').toPromise()).data;
    const shortMatchInfoArray : IMatch[] = [];
    fullMatchInfo.forEach(currentmatchInfo => {
      const match: IMatch = {
        awayTeamName: currentmatchInfo.AwayTeam,
        homeTeamName: currentmatchInfo.HomeTeam,
        matchDate: currentmatchInfo.Date,
        matchStatus: 'ok',
        homeTeamResult: currentmatchInfo.FTHG,
        awayTeamResult: currentmatchInfo.FTAG 
      };
      shortMatchInfoArray.push(match);
    });

    return shortMatchInfoArray; 
  }
}
