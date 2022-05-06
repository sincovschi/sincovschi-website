import { Controller, Get, Param } from '@nestjs/common';
import { ArticleService } from '@sincovschi-website/article';

import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly articleService: ArticleService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/articles')
  getArticles() {
    return this.articleService.findAll();
  }

  @Get('/articles/:slug')
  getOneArticles(@Param() params) {
    return this.articleService.findOne(params.slug);
  }

  @Get('/articles/create-one')
  createOneArticle() {
    return this.articleService.createOne();
  }

  @Get('/articles/remove/:slug')
  removeArticle(@Param() params) {
    return this.articleService.remove(params.slug);
  }

  @Get('/articles/remove-all')
  removeAllArticle() {
    return this.articleService.removeAll();
  }
}
