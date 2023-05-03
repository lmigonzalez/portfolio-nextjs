import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

import { useStateContext } from '../context/StateContext';
const About = () => {
  const { theme } = useStateContext();

  return (
    <>
      <Head>
        <title>Luis Gonzalez | About</title>
        <meta
          name="description"
          content="Learn more about me, my background, and my expertise. Discover why I'm passionate about what I do and how I can help you achieve your goals."
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
        <div className="flex flex-col items-center justify-center space-y-3 py-16 w-[1400px] max-w-full px-4 m-auto leading-7">
          <div className="relative w-fit py-2 m-auto mb-10">
            <h1 className="">About me</h1>
            <span
              className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
              style={{ width: '50%' }}
            ></span>
          </div>
          {/* &apos; */}
          <div className=" m-auto flex  gap-4 ">
            <div className="">
              <h4 className="text-xl font-bold mb-4">Welcome to my website!</h4>
              <Image
                src={'/Luis-Gonzalez.png'}
                alt=""
                width={350}
                height={400}
                className="mb-2 md:mb-0 md:float-right md:ml-4"
              />
              <div className="space-y-3 ">
                <p>
                  My name is Luis Gonzalez, and I&apos;m a skilled Full-Stack
                  Web Developer based in sunny Miami, Florida.{' '}
                </p>
                <p>
                  I have a passion for coding and a keen eye for design, which
                  allows me to specialize in creating beautiful and
                  user-friendly web applications using the latest technologies.
                </p>

                <p>
                  My expertise lies in HTML, CSS, and Javascript, and I have
                  experience working with cutting-edge frameworks such as React,
                  Next, Angular, Node, and Express. Additionally, I am
                  proficient in databases such as MongoDB and MySQL, which
                  enables me to create fast and efficient web applications that
                  are responsive to user needs.
                </p>

                <p>
                  I am also a talented UX/UI designer who uses tools like Figma
                  to create beautiful, intuitive designs that optimize the user
                  experience and encourage visitors to return to your site.
                </p>
                <p>
                  Moreover, I possess a solid foundation in SEO techniques, and
                  I can optimize your website to improve its search engine
                  ranking, driving more traffic to your site and increasing your
                  online visibility.
                </p>

                <p>
                  As a freelance web developer, I have honed my client
                  management skills, and I am committed to providing you with
                  the highest level of customer service throughout the entire
                  development process, whether you're a small business owner or
                  a large corporation.
                </p>
              </div>
            </div>
            {/* <div className="w-2/5 bg-green-300">

            </div> */}
          </div>
          <div className="space-y-3">
            <p>
              Some common problems that clients face are poor website
              performance, inconsistent or outdated website design, difficulty
              managing website content, poor search engine ranking, security
              vulnerabilities, limited mobile responsiveness, and limited user
              engagement.
            </p>
            <p>
              However, I have a solution for each of these problems, such as
              optimizing website speed and performance, creating a modern and
              intuitive design, developing a custom content management system,
              implementing security measures, developing a responsive design,
              and utilizing UX/UI design principles.
            </p>
          </div>
          <div className="space-y-4 py-8  w-full">
            <h4 className="text-start text-xl font-bold mb-4 ">
              My expertise includes:
            </h4>
            <div>
              <ul>
                <li>Custom web development</li>
                <li>UX/UI design</li>
                <li>Search engine optimization (SEO)</li>
                <li>Content management systems (CMS)</li>
                <li>E-commerce development</li>
                <li>Web hosting and maintenance</li>
                <li>Mobile App Development (IOS and Android)</li>
              </ul>
            </div>
            <div>
              <p>
                I bring technical expertise, design skills, client management
                skills, SEO skills, responsive design, and custom solutions to
                the table. I also offer competitive pricing for my services,
                ensuring you receive high-quality solutions within your budget.
              </p>
            </div>
            <br />
            <p>
              If you need a skilled and experienced web developer in Miami, feel
              free to contact me, and let's discuss how I can help you achieve
              your online goals.
            </p>
          </div>

          {/* personal inf */}
          <div className="w-full py-8 ">
            <h3
              className={`text-xl mb-4 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              But Luis, tell me more about you. Okay okay, if you really want to
              know, here is some information about my personal life.
            </h3>
            <div className="flex gap-4">
              {' '}
              <div className="space-y-3">
                <Image
                  src={'/Luis-Gonzalez-family.png'}
                  alt=""
                  width={400}
                  height={400}
                  className="rounded-xl mb-2 md:mb-2 md:float-right md:ml-4"
                />
                <p>
                  Having immigrated to the United States as a child in the early
                  2000s, I take great pride in my Cuban heritage and strong
                  cultural identity. My family is of utmost importance to me,
                  and I am grateful for my wonderful wife and daughter, who
                  brings immense joy and love into my life every day.
                </p>
                <p>
                  Maintaining a healthy and active lifestyle is important to me,
                  and I prioritize hitting the gym regularly to stay fit and
                  energized. Exercise helps me stay focused and productive in my
                  work, as well as more present and engaged in my personal life.
                </p>
                <p>
                  In my free time, I enjoy playing Dota 2 with my friends. This
                  game provides a fun and challenging way to unwind and connect
                  with others who share similar interests.{' '}
                </p>
                <p>
                  I appreciate the strategic and team-oriented aspects of Dota 2
                  and enjoy the sense of accomplishment that comes with working
                  together to achieve a common goal.
                </p>
                <p>
                  Overall, a healthy work-life balance is essential to success
                  and happiness. By caring for myself and my loved ones and
                  enjoying my hobbies and passions outside of work, I can bring
                  my best self to everything I do.
                </p>
              </div>
              {/* <div className=''>

              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
