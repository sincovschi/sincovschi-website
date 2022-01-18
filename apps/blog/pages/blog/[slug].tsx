import {
  Article,
  ARTICLES_DIR,
  getArticleContent,
} from '@sincovschi-website/article';
import fs from 'fs';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function ArticleComponent({ article }: { article: Article }) {
  const router = useRouter();

  if (!router.isFallback && !article?.data.title) {
    return <h1>404</h1>;
  }

  return <article dangerouslySetInnerHTML={{ __html: article.html }} />;
}

/**
 * If you export an async function called getStaticProps from a page,
 * Next.js will pre-render this page at build time
 * using the props returned by getStaticProps.
 */
export const getStaticProps: GetStaticProps<{ article: Article }> = async ({
  params: { slug },
}) => {
  const article = getArticleContent(slug + '.md');
  return { props: { article } };
};
/**
 * If a page has dynamic routes (documentation)
 * and uses getStaticProps it needs to define a list of paths
 * that have to be rendered to HTML at build time.
 */
export const getStaticPaths: GetStaticPaths = () => {
  const articlesFileNames = fs.readdirSync(ARTICLES_DIR);

  return {
    paths: articlesFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/i, ''),
        },
      };
    }),
    fallback: false,
  };
};
