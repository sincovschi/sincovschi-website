import { Injectable } from '@nestjs/common';
import { ArticleEntity } from './article.entity';

@Injectable()
export class ArticleService {
  async findAll(): Promise<ArticleEntity[]> {
    return ArticleEntity.find();
  }

  findOne(slug: string): Promise<ArticleEntity | undefined> {
    return ArticleEntity.findOne({
      slug,
    });
  }

  createOne(): Promise<ArticleEntity> {
    return ArticleEntity.create({
      slug: String(Math.random()),
    }).save();
  }

  async remove(slug: string): Promise<void> {
    const article = await this.findOne(slug);
    await article?.remove();
  }

  async removeAll(): Promise<ArticleEntity[]> {
    return ArticleEntity.remove(await this.findAll());
  }
}
