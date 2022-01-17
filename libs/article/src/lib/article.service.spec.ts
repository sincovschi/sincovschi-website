import { Test } from '@nestjs/testing';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ArticleService],
    }).compile();

    service = module.get(ArticleService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
