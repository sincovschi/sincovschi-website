import { Article, getAllArticles } from '@sincovschi-website/article';
import { ArticleListItem } from '@sincovschi-website/pages';
import Head from 'next/head';

export default function BlogPage({ articles }: { articles: Article[] }) {
  return (
    <>
      <Head>
        <title>Eugene's Blog.</title>
        <meta
          name="description"
          content="Eugene blog where you can find interesting articles for curious developers."
        />
      </Head>
      <ul>
        {articles.map((a, i) => (
          <li key={i}>
            <ArticleListItem article={a} />
          </li>
        ))}
        <style jsx>{`
          ul {
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: 1fr;
            gap: 0.3rem;
          }
          @media (min-width: 768px) {
            ul {
              grid-template-columns: 1fr 1fr;
            }
          }
          li {
            list-style-type: none;
            margin: 0 0 0.3rem;
            padding: 0;
          }
        `}</style>
      </ul>
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: { articles: Article[] };
}> {
  return { props: { articles: getAllArticles() } };
}
