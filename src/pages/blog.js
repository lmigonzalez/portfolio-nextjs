import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import BlogCard from '@/components/BlogCard';
import ReactPaginate from 'react-paginate';
import { createClient } from 'contentful';

const Blog = ({ blogPost }) => {
  const [filterBlogs, setFilterBlogs] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleFilterChange(e) {
    const value = e.target.value;
    setInputValue(value);

    // Filter the blogs based on the title
    const filteredBlogs = blogPost.filter((item) => {
      return item.fields.title.toLowerCase().includes(value.toLowerCase());
    });

    // Update the filterBlogs state with the filtered blogs
    setFilterBlogs(filteredBlogs);
  }

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 9;
  const pagesVisited = pageNumber * blogsPerPage;

  function SelectedBlogs() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPost
          .slice(pagesVisited, pagesVisited + blogsPerPage)
          .map((item, index) => {
            return (
              <BlogCard
                key={index}
                imageUrl={item.fields.thumbnail?.fields?.file?.url}
                blogTitle={item.fields.title}
                tags={item.fields?.tags}
                slug={item.fields?.slug}
              />
            );
          })}
      </div>
    );
  }

  const pageCount = Math.ceil(blogPost.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        <div className="flex flex-col items-center justify-center space-y-3 py-16 w-[1400px] max-w-full px-4 m-auto">
          <div className="mb-10 ">
            <div className="relative w-fit py-2 m-auto mb-4">
              <h1 className="">Blog</h1>
              <span
                className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
                style={{ width: '50%' }}
              ></span>
            </div>
            <p className="text-lg text-center">
              I write articles about Web Development.
            </p>
          </div>
          <div className="w-full">
            <div className="w-full h-10 flex justify-center">
              <input
                onChange={handleFilterChange}
                name="search"
                value={inputValue}
                type="text"
                placeholder="Search for blogs"
                className="w-[700px] h-full max-w-full border-2 border- rounded px-4 text-black_color"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4 my-16 m-auto">
              {inputValue.length > 0 && filterBlogs.length === 0 ? (
                <p className="text-xl">No blogs found</p>
              ) : inputValue.length > 0 ? (
                filterBlogs.map((item, index) => (
                  <BlogCard
                    key={index}
                    imageUrl={item.fields.thumbnail?.fields?.file?.url}
                    blogTitle={item.fields.title}
                    tags={item.fields?.tags}
                    slug={item.fields?.slug}
                  />
                ))
              ) : (
                <SelectedBlogs />
              )}
            </div>
          </div>
          <div className="w-full flex justify-center items-center py-8 px-4">
            <ReactPaginate
              previousLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              nextLabel={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={
                'flex items-center justify-center space-x-4 text-[20px]'
              }
              previousLinkClassName={''}
              nextLinkClassName={''}
              disabledClassName={'text-[#D8D8D8]'}
              activeClassName={'bg-orange_color text-white  px-2 py-1 rounded'}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'blogPost' });

  return {
    props: {
      blogPost: res.items,
    },
  };
}
