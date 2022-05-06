import { marked } from 'marked';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { join } from 'path';
import fs from 'fs';

export interface WorkshopProps {
  htmlString: string;
}

export default function Workshop(props: WorkshopProps) {
  return (
    <>
      <Head>
        <title>Eugene&apos;s Workshops.</title>
        <meta
          name="description"
          content="A list of workshops organized for the developers around the world."
        />
      </Head>

      <article dangerouslySetInnerHTML={{ __html: props.htmlString }} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  htmlString: string;
}> = async () => {
  const filePath = join(
    process.cwd(),
    'apps',
    'blog',
    'pages',
    'workshops',
    'index.md'
  );
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const htmlString = marked.parse(fileContent);

  return { props: { htmlString } };
};
