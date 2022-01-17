import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './article.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article)
    private model: typeof Article
  ) {}

  async findAll(): Promise<Article[]> {
    return this.model.findAll();
  }

  findOne(id: string): Promise<Article | null> {
    return this.model.findOne({
      where: {
        id,
      },
    });
  }

  createOne(): Promise<Article | null> {
    return this.model.create({
      slug: String(Math.random()),
    });
  }

  async remove(id: string): Promise<void> {
    const article = await this.findOne(id);
    await article?.destroy();
  }

  async removeAll(): Promise<void> {
    return (await this.findAll()).forEach((a) => a.destroy());
  }
}
