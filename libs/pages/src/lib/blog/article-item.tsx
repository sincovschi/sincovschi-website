import { useRouter } from 'next/router';
import { Article } from '@sincovschi-website/article';

export function ArticleListItem({
  article: {
    fileName,
    data: { title, shortDescription, coverPath, publishedAt },
  },
}: {
  article: Article;
}) {
  const router = useRouter();

  const goToArticle = () =>
    router.push('/blog/' + fileName.replace(/\.md$/i, ''));

  return (
    <article onClick={goToArticle}>
      <div className="cover">
        <div className="cover-content">
          <h5>{title}</h5>
          <time>{publishedAt}</time>
          <img src={coverPath} alt={title + ' Cover'} />
        </div>
      </div>
      <h6>{shortDescription}</h6>
      <style jsx>{`
        article {
          cursor: pointer;
        }
        article:hover h5 {
          text-decoration: underline;
        }
        .cover {
          width: 100%;
          height: 0px;
          padding-top: 61.8%;
          position: relative;
        }
        .cover-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 0.3rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        h5 {
          position: relative;
          z-index: 2;
          margin: 0;
        }
        time {
          position: relative;
          z-index: 2;
          font-size: 0.7em;
        }
        h6 {
          position: relative;
          z-index: 2;
        }
        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.5;
        }
      `}</style>
    </article>
  );
}
