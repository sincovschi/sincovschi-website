import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Index() {
  return (
    <>
      <Head>
        <title>Eugene Sincovschi - Engineer, Mentor, Researcher.</title>
        <meta
          name="description"
          content="Promoting clean coding with psychological refactoring aims to improve
          worldwide software quality so that every developer enjoys clean coding
          and resonates with community."
        />
      </Head>

      {/*
        TODO:
          1. bigger picture
          2. emphasize code quality and tdd
          3. add some images
      */}

      <section>
        <h2>
          Hi, I&apos;m Eugene Sincovschi, a well-rounded engineer, a mentor and
          a passionate researcher.
        </h2>
        <hr />
        <div className="profile-image">
          <Image
            src="/images/me.jpg"
            width="250"
            height="250"
            alt="Eugene Sincovschi Picture"
          />
        </div>
        <h1>
          Promoting clean coding with psychological refactoring aims to improve
          worldwide software quality so that every developer enjoys clean coding
          and resonates with community.
        </h1>
        <hr />
        <p>
          I love to share the knowledge that has accumulated over 10 years of
          experience.
        </p>
        <p>
          My <Link href="/blog">blog</Link> reflects the curiosities and
          utilities that I found during my{' '}
          <Link href="/research">research</Link> or working hours.
        </p>
        <p>
          I plan to put together a sequence of{' '}
          <Link href="/workshops">workshops</Link> that will improve
          developers&apos; well-being and code quality, by training the ways of
          psychological refactoring.
        </p>
      </section>

      <style jsx>{`
        .profile-image {
          margin: 0.4rem 0.25rem 0.15rem;
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
