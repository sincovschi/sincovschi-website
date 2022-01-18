import { getAllArticles } from '@sincovschi-website/article/article.markdown';
import { Article } from '@sincovschi-website/article/article.model';

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
