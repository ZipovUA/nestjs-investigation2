import { Test, TestingModule } from '@nestjs/testing';
import { LoadMatchesController } from './loadMatches.controller';
import { LoadMatchesService } from './loadMatches.service';

describe('MatchesController', () => {
  let loadmatchesController: LoadMatchesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LoadMatchesController],
      providers: [LoadMatchesService],
    }).compile();

    loadmatchesController = app.get<LoadMatchesController>(LoadMatchesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(loadmatchesController.getHello()).toBe('Hello World!');
    });
  });
});
