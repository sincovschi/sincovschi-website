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
          I envision a world where code quality is high and developers write
          readable and elegant code with ease and joy, using psychological cues
          to trigger small but effective refactoring.
        </h1>
        <hr />
        <p>
          As a software developer with over a decade of experience, I have
          learned the importance of clean coding for both the quality of the
          software and the well-being of the developers. Clean coding is not
          just a skill, but also a mindset that requires constant improvement
          and adaptation.
        </p>
        <p>
          Explore a variety of topics related to technology, innovation and
          creativity in this <Link href="/blog">blog</Link>. Whether you are
          looking for insights, tips, tutorials or reviews, you will find
          something useful and interesting here.
        </p>
        <p>
          This <Link href="/research">research</Link> section will teach you
          some mind tricks to refactor your code automatically and boost your
          software quality. You will learn how to use pareidolia, pomodoro,
          millers law and more to improve your coding skills.
        </p>
        <p>
          I also offer <Link href="/workshops">workshops</Link> that will teach
          you how to use psychological refactoring in your daily work, with
          practical exercises and feedback. By joining these workshops, you will
          learn how to code better and happier, while resonating with a
          community of like-minded developers.
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
