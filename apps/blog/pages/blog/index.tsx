import { Article, getAllArticles } from '@sincovschi-website/article';

export default function Blog({ articles }: { articles: Article[] }) {
  return (
    <ul>
      {articles.map((a) => {
        return (
          <li key={Math.random()}>
            <a href={'/blog/' + a.fileName.replace(/\.md$/i, '')}>
              {a.data.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps(): Promise<{
  props: { articles: Article[] };
}> {
  return { props: { articles: getAllArticles() } };
}
