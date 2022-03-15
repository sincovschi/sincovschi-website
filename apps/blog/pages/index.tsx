import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Eugene Sincovschi - Engineer, Mentor, Researcher.</title>
      </Head>

      {/* 1. bigger picture
          2. emphasize code quality and tdd
          3. add some images */}

      <section>
        <h5>
          Hi, I&apos;m Eugene Sincovschi, a well-rounded engineer, a technical
          and cultural mentor and a passionate researcher.
        </h5>
        <div className="profile-image">
          <Image
            src="/images/me.jpg"
            width="250"
            height="250"
            alt="Eugene Sincovschi Picture"
          />
        </div>
        <p>
          I love to share my knowledge that is acquired during over 10 years of
          experience. My <Link href="/blog">Blog</Link> reflects the curiosities
          and utilities that I found during my work or research.
        </p>
        <p>
          One of the visions that drives me, is the increase of code quality
          over the world, by helping developers to love coding and to discover
          the inner &quot;boy scout&quot; attitude.
        </p>
      </section>

      <style jsx>{`
        .profile-image {
          padding: 0.25rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .profile-image {
            float: right;
          }
        }
      `}</style>
    </>
  );
}
