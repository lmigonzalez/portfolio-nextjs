import React, { useState } from 'react';
import Head from 'next/head';
import ReactPaginate from 'react-paginate';
import Layout from '@/components/layout/Layout';
import { useStateContext } from '@/context/StateContext';
import { projects } from '../data/Projects';
import ProjectCard from '@/components/ProjectCard';
const Projects = () => {
  const { theme } = useStateContext();

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 5;
  const pagesVisited = pageNumber * projectsPerPage;

  function SelectedProjects() {
    return (
      <div className="space-y-10">
        {projects
          .slice(pagesVisited, pagesVisited + projectsPerPage)
          .map((item, index) => {
            return (
              <ProjectCard
                key={index}
                imageUrl={item.imageUrl}
                projectName={item.projectName}
                projectDescription={item.projectDescription}
                tech={item.tech}
                code={item.code}
                website={item.website}
                underConstruction={item.underConstruction}
              />
            );
          })}
      </div>
    );
  }

  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Head>
        <title>Luis Gonzalez | Projects</title>
        <meta
          name="description"
          content="Explore my latest projects and see how I can help you turn your ideas into reality. From mobile apps to websites, I create unique and engaging digital experiences."
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
        <div
          className={`flex flex-col items-center justify-center space-y-3 py-16 ${
            theme === 'light' ? 'text-black' : 'text-white'
          } w-[1400px] max-w-full px-4 m-auto`}
        >
          <div className=" mb-12 ">
            <div className="relative w-fit py-2 m-auto mb-4">
              <h1 className="">Projects</h1>
              <span
                className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
                style={{ width: '50%' }}
              ></span>
            </div>
            <p className="text-lg text-center">
              Discover My Diverse Portfolio of Web Development Projects - From
              Sleek and Responsive Websites to Robust E-commerce Solutions.
            </p>
          </div>

          <div className="">
            <SelectedProjects />
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

export default Projects;
