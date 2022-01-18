import { ARTICLES_DIR } from '@sincovschi-website/article/article.const';
import { getArticleContent } from '@sincovschi-website/article/article.markdown';
import { Article } from '@sincovschi-website/article/article.model';
import fs from 'fs';
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
export async function getStaticProps({ params }: { params: any }) {
  const article = await getArticleContent(params.slug + '.md');

  return { props: { article } };
}
/**
 * If a page has dynamic routes (documentation)
 * and uses getStaticProps it needs to define a list of paths
 * that have to be rendered to HTML at build time.
 */
export async function getStaticPaths() {
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
}
