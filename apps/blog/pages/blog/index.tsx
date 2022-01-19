import { Article, getAllArticles } from '@sincovschi-website/article';

export default function Blog({ articles }: { articles: Article[] }) {
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
  const {
    fileName,
    data: { title, shortDescription, coverPath },
  } = article;
  return (
    <a href={'/blog/' + fileName.replace(/\.md$/i, '')}>
      <img src={coverPath} alt={title + ' Cover'} />
      <h5>{title}</h5>
      <small>{shortDescription}</small>
      <style jsx>{`
        a {
          display: grid;
          grid-template-columns: 3.5rem auto;
          grid-template-rows: auto auto;
          align-items: center;
          column-gap: 0.3rem;
          text-decoration: none;
        }
        img {
          grid-area: 1 / 1 / span 2 / span 1;
        }
        h5 {
          grid-area: 1 / 2 / span 1 / span 1;
          margin: 0;
        }
        small {
          grid-area: 2 / 2 / span 1 / span 1;
        }
      `}</style>
    </a>
  );
}

export async function getStaticProps(): Promise<{
  props: { articles: Article[] };
}> {
  return { props: { articles: getAllArticles() } };
}
