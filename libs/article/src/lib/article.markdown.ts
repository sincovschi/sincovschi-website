import fs from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import { join } from 'path';
import { ARTICLES_DIR } from './article.const';
import { Article } from './article.model';

export function getAllArticles(): Array<Article> {
  const articlesFileNames = fs.readdirSync(ARTICLES_DIR);
  return articlesFileNames.map(getArticleContent);
}

export function getArticleContent(fileName: string): Article {
  const filePath = join(ARTICLES_DIR, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return markdownToArticle({
    fileName,
    fileContent,
  });
}

export function markdownToArticle({
  fileName,
  fileContent,
}: {
  fileName: string;
  fileContent: string;
}): Article {
  const { content, data } = matter(fileContent);
  const html = marked.parse(content);
  return { html, fileName, data: data as Article['data'] };
}
