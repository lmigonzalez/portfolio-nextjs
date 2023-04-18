import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import BlogCard from '@/components/BlogCard';
import { blogs } from '../data/Blogs';
const Blog = () => {
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
            {blogs.length > 0 && (
              <div className="w-full h-10 flex justify-center">
                <input
                  type="text"
                  placeholder="Search for blogs"
                  className="w-[700px] h-full max-w-full border-2 border- rounded px-4"
                />
              </div>
            )}

            {blogs.length <= 0 ? (
              <div className="text-center">
                {' '}
                <p className="text-2xl">
                  There are currently no blogs available, please stay tuned for
                  future updates.
                </p>{' '}
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-4 my-16 m-auto">
                {/* {blogs.map((item, index) => {
                  return (
                    <BlogCard
                      key={index}
                      imageUrl={item.imageUrl}
                      blogTitle={item.blogTitle}
                      tags={item.tags}
                    />
                  );
                })} */}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Blog;
