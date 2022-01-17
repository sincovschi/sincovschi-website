import { Injectable } from '@nestjs/common';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
  constructor() {}

  async findAll(): Promise<Article[]> {
    return Article.find();
  }

  findOne(slug: string): Promise<Article | undefined> {
    return Article.findOne({
      slug,
    });
  }

  createOne(): Promise<Article> {
    return Article.create({
      slug: String(Math.random()),
    }).save();
  }

  async remove(slug: string): Promise<void> {
    const article = await this.findOne(slug);
    await article?.remove();
  }

  async removeAll(): Promise<Article[]> {
    return Article.remove(await this.findAll());
  }
}
