import { Module } from '@nestjs/common';
import { ArticleModule } from '@sincovschi-website/article/article.module';
import { PostgresModule } from '../postgres/postgres.module';
import { ViewModule } from '../view/view.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PostgresModule, ArticleModule, ViewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
