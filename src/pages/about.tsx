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
        <link rel="icon" href="/favicon.ico" />
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
                  With a passion for coding and a keen eye for design, I
                  specialize in creating beautiful, user-friendly web
                  applications using the latest technologies.
                </p>

                <p>
                  I have a strong background in HTML, CSS, and Javascript, as
                  well as experience with cutting-edge frameworks like React,
                  Next, Angular, Node, and Express.{' '}
                </p>
                <p>
                  I&apos;m also proficient in databases such as MongoDB and AWS,
                  allowing me to create fast and efficient web applications that
                  are responsive to user needs.
                </p>
                <p>
                  In addition to my development skills, I&apos;m also a talented
                  UX/UI designer. Using tools like Figma, I create beautiful,
                  intuitive designs that optimize the user experience and keep
                  people coming back to your site.
                </p>
                <p>
                  In addition to my development and design skills, I also have a
                  solid foundation in SEO techniques. By optimizing websites for
                  search engines, I can boost your online visibility and attract
                  more visitors to your site. From keyword research to content
                  optimization, I&apos;m well-versed in the latest SEO best
                  practices and can help you achieve your online goals.
                </p>
              </div>
            </div>
            {/* <div className="w-2/5 bg-green-300">

            </div> */}
          </div>
          <div className="space-y-3">
            <p>
              I also possess strong client management skills. I have experience
              working with clients to understand their unique needs and develop
              solutions that exceed their expectations. I&apos;ve been working
              as a freelance web developer for a few months now, which has
              allowed me to hone my client management skills while delivering
              top-notch work.{' '}
            </p>
            <p>
              Whether you&apos;re a small business owner or a large corporation,
              I&apos;m committed to providing you with the highest level of
              customer service throughout the entire development process.
            </p>
          </div>
          <div className="space-y-4 py-8  w-full">
            <h4 className="text-start text-xl font-bold mb-4 ">
              Problems you may have and the solution I offer
            </h4>
            <div>
              <strong>Poor website performance or slow loading times</strong>
              <p>
                I can optimize website speed and performance by implementing
                best practices such as caching, image compression, and code
                optimization.
              </p>
            </div>
            <div>
              <strong>Inconsistent or outdated website design </strong>
              <p>
                {' '}
                As a skilled UX/UI designer, I can create a modern, intuitive
                design that aligns with your brand and attracts visitors to your
                site.
              </p>
            </div>
            <div>
              <strong>Difficulty managing website content</strong>
              <p>
                I can develop a custom content management system (CMS) that
                makes it easy for you to update and manage website content
                without any technical knowledge.
              </p>
            </div>
            <div>
              <strong>Poor search engine ranking</strong>
              <p>
                I can implement SEO best practices to improve your search engine
                ranking and drive more traffic to your site.
              </p>
            </div>
            <div>
              <strong>Security vulnerabilities Solution</strong>
              <p>
                I can implement security measures such as SSL certificates,
                firewalls, and regular backups to protect your website from
                attacks.
              </p>
            </div>
            <div>
              <strong>Limited mobile responsiveness</strong>
              <p>
                I can develop a responsive design that adapts to different
                screen sizes, ensuring your website looks great on desktop,
                tablet, and mobile devices.
              </p>
            </div>
            <div>
              <strong>Limited user engagement</strong>
              <p>
                By utilizing UX/UI design principles, I can create engaging user
                experiences that keep visitors on your site and encourage them
                to take action.
              </p>
            </div>
          </div>

          <div className="w-full py-8 ">
            <h3
              className={`text-xl mb-4 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              My Expertise:
            </h3>
            <ul className="space-y-3">
              <li>
                {' '}
                <b>Custom web development:</b> I can build custom web
                applications tailored to your unique needs, whether it&apos;s a
                simple marketing website, a complex e-commerce platform, or a
                sophisticated web-based tool.
              </li>
              <li>
                {' '}
                <b>UX/UI design:</b> I can create beautiful, user-friendly
                designs that optimize the user experience and keep visitors
                engaged with your brand.
              </li>
              <li>
                {' '}
                <b>Search engine optimization (SEO):</b> I can optimize your
                website to improve its search engine ranking, driving more
                traffic to your site and increasing your online visibility.
              </li>
              <li>
                {' '}
                <b>Content management systems (CMS):</b> I can develop custom
                CMS solutions that make it easy for you to manage and update
                your website content without any technical knowledge.
              </li>
              <li>
                {' '}
                <b>E-commerce development:</b> I can develop e-commerce
                platforms that are tailored to your unique business needs,
                whether it&apos;s a simple online store or a complex
                marketplace.
              </li>
              <li>
                {' '}
                <b>Web hosting and maintenance:</b> I can provide web hosting
                and maintenance services to ensure that your website is always
                up-to-date, secure, and running smoothly.
              </li>
            </ul>
          </div>

          <div className="w-full py-8 ">
            <h3
              className={`text-xl mb-4 ${
                theme === 'light' ? 'text-black' : 'text-white'
              }`}
            >
              What I bring to the table:
            </h3>
            <ul className="space-y-3">
              <li>
                {' '}
                <b>Technical expertise:</b> With extensive experience in web
                development technologies such as HTML, CSS, Javascript,
                Typescript, React, Next, Angular, Node, Express, MongoDB, AWS,
                and more, I have the technical expertise to deliver high-quality
                solutions that meet your unique needs.
              </li>
              <li>
                {' '}
                <b>Design skills:</b> As a skilled UX/UI designer, I can create
                beautiful, intuitive designs that optimize the user experience
                and align with your brand.
              </li>
              <li>
                {' '}
                <b>Client management skills:</b> I have experience working with
                clients to understand their needs and develop solutions that
                exceed their expectations. I&apos;m committed to providing the
                highest level of customer service throughout the entire
                development process.
              </li>
              <li>
                {' '}
                <b>SEO skills:</b> By optimizing your website for search
                engines, I can help boost your online visibility and attract
                more visitors to your site.
              </li>
              <li>
                {' '}
                <b>Responsive design:</b> I can develop responsive designs that
                adapt to different screen sizes, ensuring that your website
                looks great on desktop, tablet, and mobile devices.
              </li>
              <li>
                {' '}
                <b>Custom solutions:</b> I can create custom solutions tailored
                to your unique needs, whether it&apos;s a simple marketing
                website or a complex e-commerce platform.
              </li>
              <li>
                {' '}
                <b>Competitive pricing:</b> I offer competitive pricing for my
                services, ensuring you receive high-quality solutions within
                your budget.
              </li>
            </ul>
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
