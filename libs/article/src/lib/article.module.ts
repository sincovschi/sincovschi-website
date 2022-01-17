import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.model';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticleService],
  exports: [ArticleService],
})
export class ArticleModule {}
