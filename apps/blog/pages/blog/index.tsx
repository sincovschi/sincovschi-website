import { Article, getAllArticles } from '@sincovschi-website/article';
import { useRouter } from 'next/router';

export default function BlogPage({ articles }: { articles: Article[] }) {
  return (
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
        }
        li {
          list-style-type: none;
          margin: 0 0 0.3rem;
          padding: 0;
        }
      `}</style>
    </ul>
  );
}

function ArticleListItem({ article }: { article: Article }) {
  const router = useRouter();

  const {
    fileName,
    data: { title, shortDescription, coverPath, date },
  } = article;

  const goToArticle = () =>
    router.push('/blog/' + fileName.replace(/\.md$/i, ''));

  return (
    <article onClick={goToArticle}>
      <img src={coverPath} alt={title + ' Cover'} />
      <h5>{title}</h5>
      <time>{date || '22.01.21'}</time>
      <small>{shortDescription}</small>
      <style jsx>{`
        article {
          cursor: pointer;
          display: grid;
          grid-template-columns: 3.5rem auto;
          grid-template-rows: auto auto auto;
          grid-template-areas:
            'image title'
            'image time'
            'image summary';
          align-items: center;
          column-gap: 0.3rem;
          text-decoration: none;
        }
        article:hover h5 {
          text-decoration: underline;
        }
        img {
          grid-area: image;
        }
        h5 {
          grid-area: title;
          margin: 0;
        }
        time {
          grid-area: time;
        }
        small {
          grid-area: summary;
        }
      `}</style>
    </article>
  );
}

export async function getStaticProps(): Promise<{
  props: { articles: Article[] };
}> {
  return { props: { articles: getAllArticles() } };
}
