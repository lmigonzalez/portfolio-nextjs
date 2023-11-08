import React from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/layout/Layout";

import { useStateContext } from "../context/StateContext";
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
              style={{ width: "50%" }}
            ></span>
          </div>
          {/* &apos; */}
          <div className=" m-auto flex  gap-4 ">
            <div className="">
              <Image
                src={"/Luis G.png"}
                alt=""
                width={250}
                height={250}
                className="mb-2 md:mb-0 md:float-right md:ml-4"
              />
              <div className="space-y-3">
                <p>
                  I&apos;m Luis Gonzalez, your go-to Full-Stack Web Developer and
                  Shopify Expert in the sunny locale of Miami, Florida.
                </p>
                <p>
                  My drive for coding, merged with a flair for design, has led
                  me to specialize in developing accessible, visually appealing
                  web applications using the latest tech.
                </p>

                <p>
                  My skill set is rooted in HTML, CSS, and JavaScript, and I&apos;m
                  well-versed in frameworks like React, Next.js, Angular,
                  Node.js, and Express. I also have a firm handle on database
                  systems, including MongoDB and MySQL, enabling me to build
                  fast and user-responsive web apps.
                </p>

                <p>
                  Besides coding, I&apos;m a skilled UX/UI designer who uses Figma to
                  craft intuitive and attractive interfaces that enhance user
                  experience and keep them coming back.
                </p>
                <p>
                  I&apos;m also your Shopify guru—creating custom Shopify themes that
                  stand out and setting up online stores that look great and
                  convert. My knack for SEO means your site won&apos;t just sparkle;
                  it&apos;ll be found.
                </p>

                <p>
                  In my freelance journey, I&apos;ve fine-tuned my skills in client
                  service, ensuring you get the best support from start to
                  finish, no matter the size of your business.
                </p>
              </div>
            </div>
            {/* <div className="w-2/5 bg-green-300">

            </div> */}
          </div>
          <div className="space-y-3">
            <p>
              I tackle standard client challenges head-on, from boosting your
              site&apos;s speed, updating your design, simplifying content
              management, and improving your search rank to upping your security
              and ensuring your site looks good on any device.
            </p>
          </div>
          <div className="space-y-4 py-8  w-full">
            <h4 className="text-start text-xl font-bold mb-4 ">
              Here&apos;s what I offer:
            </h4>
            <div>
              <ul>
                <li>Custom web development</li>
                <li>Custom web and Shopify theme development</li>
                <li>Expert UX/UI design</li>
                <li>SEO to get your site noticed</li>
                <li>Streamlined content management systems</li>
                <li>E-commerce solutions that sell</li>
                <li>Dependable web hosting and upkeep</li>
              </ul>
            </div>
            <div>
              <p>
                I pride myself on combining technical know-how with design
                creativity and customer care, all at a price that fits your
                budget.
              </p>
            </div>
            <br />
            <p>
              Need a web and Shopify pro in Miami? Reach out, and let&apos;s boost
              your online presence together.
            </p>
          </div>

          {/* personal inf */}
          <div className="w-full py-8 ">
            <h3
              className={`text-xl mb-4 ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              So, you&apos;re curious about the person behind the code? Well, if
              you&apos;re keen to learn a bit more about me beyond the screen, here&apos;s
              a glimpse into my personal world.
            </h3>
            <div className="flex gap-4">
              {" "}
              <div className="space-y-3">
                <Image
                  src={"/Luis-Gonzalez-family.png"}
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
                  with others who share similar interests.{" "}
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
