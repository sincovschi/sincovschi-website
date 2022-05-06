import { marked } from 'marked';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { join } from 'path';
import fs from 'fs';

export interface ResearchProps {
  htmlString: string;
}

export default function Research(props: ResearchProps) {
  return (
    <>
      <Head>
        <title>Eugene&apos;s Research.</title>
        <meta
          name="description"
          content="A combination of psychological ideas that will trigger automated refactoring"
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
    'research',
    'index.md'
  );
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const htmlString = marked.parse(fileContent);

  return { props: { htmlString } };
};
