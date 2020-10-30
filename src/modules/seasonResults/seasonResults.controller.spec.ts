import { Test, TestingModule } from '@nestjs/testing';
import { SeasonResultsController } from './seasonResults.controller';
import { SeasonResultsService } from './seasonResults.service';

describe('AppController', () => {
  let appController: SeasonResultsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SeasonResultsController],
      providers: [SeasonResultsService],
    }).compile();

    appController = app.get<SeasonResultsController>(SeasonResultsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World! (from Season Results)');
    });
  });
});
