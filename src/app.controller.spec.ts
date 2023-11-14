import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('EmptyAnalyzeTimeSeries', () => {
    it('should return an empty object, because the test is not running', () => {
      const result = {};

      expect(
        appController.analyzeTimeSeries([
          2, 2, 4, 2, 6, 2, 2, 4, 4, 2, 2, 9, 2, 2, 6, 2, 6, 2, 9,
        ]),
      ).toEqual(result);
    });
  });

  describe('EmptyGetTestPattern', () => {
    it('should return empty array', () => {
      const result = [];

      expect(
        appController.getTestPattern([
          2, 2, 4, 2, 6, 2, 2, 4, 4, 2, 2, 9, 2, 2, 6, 2, 6, 2, 9,
        ]),
      ).toEqual(result);
    });
  });

  describe('analyzeTimeSeries', () => {
    it('should return first occurrence of 8 in the pattern and end time last occurrence of 9 or 8 if 9 is not present of each test', () => {
      const result = {
        "289": {
          "pattern": "289",
          "start": "7",
          "stop": "12",
          "duration": "5"
        },
        "989": {
          "pattern": "989",
          "start": "11",
          "stop": "12",
          "duration": "1"
        }
      }

      expect(
        appController.analyzeTimeSeries([2, 2, 2, 4, 4, 2, 2, 8, 9, 2, 9, 8, 9]),
      ).toEqual(result);
    });
});

  describe('getTestPattern', () => {
    it('Identify every instance of a test based on the patterns mentioned.', () => {
      const result = ['2,8,2', '2,8,9'];

      expect(
        appController.getTestPattern([
          2, 2, 8, 2, 8, 2, 2, 4, 4, 2, 2, 8, 9, 2, 9, 8, 8, 8, 9,
        ]),
      ).toEqual(result);
    });
  });
});
