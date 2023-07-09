import React from 'react';
import Head from 'next/head';
import { useStateContext } from '@/context/StateContext';
import Layout from '../../components/layout/Layout';
import { createClient } from 'contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/cjs/styles/prism'; // Choose your preferred code highlighting style

const renderAsset = (node, children) => {
  const { file } = node.data.target.fields;
  const url = file.url;
  const alt = file.description || file.fileName;
  return <img src={url} alt={alt} />;
};

const renderEmbeddedEntry = (node) => {
  const { code } = node.data.target.fields;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={agate}
      wrapLongLines={true}
      wrapLines={false}
      lineProps={{ style: { flexWrap: 'wrap' } }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: renderAsset,
    [BLOCKS.EMBEDDED_ENTRY]: renderEmbeddedEntry,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (node.content && node.content[0] && node.content[0].value) {
        const isCodeSnippet =
          node.content[0].nodeType === 'text' &&
          node.content[0].marks.some((mark) => mark.type === 'code');
        if (isCodeSnippet) {
          const code = node.content[0].value.trim();
          return (
            <SyntaxHighlighter
              language="javascript"
              style={agate}
              wrapLongLines={true}
              wrapLines={false}
              lineProps={{ style: { flexWrap: 'wrap' } }}
            >
              {code}
            </SyntaxHighlighter>
          );
        }
      }
      return <p>{children}</p>;
    },
  },
};

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost',
  });

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params?.slug,
  });

  return {
    props: { article: items[0].fields },
  };
};

const Article = ({ article }) => {
  const { theme } = useStateContext();
  const content = article?.article;

  return (
    <>
      <Head>{/* Head content */}</Head>
      <Layout>
        <article
          className={`${
            theme === 'light' ? 'text-black' : 'text-white'
          } w-[700px] max-w-full m-auto px-4`}
        >
          <div>
            <h1
              className={`${theme === 'light' ? 'text-black' : 'text-white'}`}
            >
              {article.title}
            </h1>
            <div className="">
              {documentToReactComponents(content, options)}
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Article;
