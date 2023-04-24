import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStateContext } from '@/context/StateContext';

import Layout from '../../components/layout/Layout';

const renderAsset = (node: any, children: any) => {
  const { file } = node.data.target.fields;
  const url = file.url;
  const alt = file.description || file.fileName;
  return <img src={url} alt={alt} />;
};

const renderCodeBlock = (node: any) => {
  const { code } = node.data;
  console.log(code);
  return <pre>{code}</pre>;
};

const renderEmbeddedEntry = (node: any) => {
  console.log(node);
  return (
    <pre>
      {' '}
      <code>{node.data.target.fields.code}</code>{' '}
    </pre>
  );
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderAsset,
    [MARKS.CODE]: renderCodeBlock,
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
  },
};

interface Props {
  article: {
    title: string;
    content: any;
    article: any;
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_KEY || '',
});


// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await client.getEntries({
//     content_type: 'blogPost',
//   });

//   const paths = res.items.map((item) => ({
//     params: { slug: item.fields.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const { items } = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.slug': params?.slug,
//   });

//   return {
//     props: { article: items[0].fields },
//   };
// };

const Article: React.FC<Props> = ({ article }) => {
  const { theme } = useStateContext();
  const content = article?.article;
  return (
    <>
      <Head>
        <title>Luis Gonzalez | Blog</title>
        <meta
          name="description"
          content="Read my latest blog posts and stay up-to-date with the latest trends in web development, web design, and more. Get inspired and learn something new today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <article
          className={`${
            theme === 'light' ? 'text-black' : 'text-white'
          } w-[700px] max-w-full m-auto px-4`}
        >
          {/* <div>
            <h1
              className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              {article.title}
            </h1>
            <div className="">
              {documentToReactComponents(content, options)}
            </div>
          </div> */}
        </article>
      </Layout>
    </>
  );
};

export default Article;
