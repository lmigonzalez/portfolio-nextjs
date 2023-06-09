import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
const Services = () => {
  const [hoverBox, setHoverBox] = useState(0);
  const [isHover, setIsHover] = useState(false);

  function onMouseEnter(box: number) {
    setHoverBox(box);
    setIsHover(true);
  }

  function onMouseLeave() {
    setIsHover(false);
  }

  return (
    <>
      <Head>
        <title>Luis Gonzalez | Services</title>
        <meta
          name="description"
          content="Discover my professional services that can help you reach your goals. From web development to web design, I offer everything you need to succeed."
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
          <div className="m-auto mb-12 ">
            <div className="relative w-fit py-2 m-auto mb-4">
              <h1 className="">Services</h1>
              <span
                className="block h-1 gradient-color absolute bottom-0 right-0 transform -translate-x-1 translate-y-1/2"
                style={{ width: '50%' }}
              ></span>
            </div>
            <p className="text-lg text-center">
              Expert Web Development Services: Enhance Your Online Presence with
              Custom Websites, E-commerce Solutions, and More!
            </p>
          </div>

          <div className="w-full text-center">
            <h4 className="text-xl font-semibold mb-4">
              The Sky is the limit!
            </h4>
            <p className="m-auto max-w-[700px]">
              I am consistently thrilled about acquiring new knowledge. Hence,
              if there&apos;s something you require that isn&apos;t listed,
              please don&apos;t hesitate to{' '}
              <Link className="text-blue_color font-semibold" href="/contact">
                contact me.
              </Link>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8">
              {/* box 1 */}
              <div
                onMouseOver={() => onMouseEnter(1)}
                onMouseLeave={onMouseLeave}
                className="bg-[#191825] h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image src="/design (1).png" alt="" width={64} height={64} />
                  <strong>UI / UX Design</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 1 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 1 && isHover && (
                    <p className="text-black">
                      Designing a website that is visually appealing and
                      user-friendly is essential to a successful online
                      presence. I will create a unique design for your website
                      or app.
                    </p>
                  )}
                </div>
              </div>

              {/* box 2 */}

              <div
                onMouseOver={() => onMouseEnter(2)}
                onMouseLeave={onMouseLeave}
                className="bg-orange_color h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image src="/coding (1).png" alt="" width={64} height={64} />
                  <strong>Custom Web Development</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 2 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 2 && isHover && (
                    <p className="text-black">
                      Need a website that works flawlessly and delivers a
                      seamless user experience? Our web development services
                      have got you covered. Let me build you a website that not
                      only looks great but also performs at its best.
                    </p>
                  )}
                </div>
              </div>

              {/* box 3 */}

              <div
                onMouseOver={() => onMouseEnter(3)}
                onMouseLeave={onMouseLeave}
                className="bg-[#191825] md:bg-orange_color lg:bg-[#191825] h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image
                    src="/mobile-development.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <strong>Mobile App Development</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 3 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 3 && isHover && (
                    <p className="text-black">
                      Bring your app idea to life with our top-notch app
                      development services. From concept to launch, I&apos;ll
                      work with you every step of the way to build a
                      high-quality and user-friendly app that meets your
                      specific needs and requirements. Let&apos;s create
                      something amazing together.
                    </p>
                  )}
                </div>
              </div>

              {/* box 4 */}

              <div
                onMouseOver={() => onMouseEnter(4)}
                onMouseLeave={onMouseLeave}
                className="bg-orange_color md:bg-[#191825] lg:bg-orange_color h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image
                    src="/mobile-shopping.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <strong>E-commerce</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 4 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 4 && isHover && (
                    <p className="text-black">
                      Looking to start an online store? My e-commerce website
                      development services can help you create a powerful and
                      easy-to-use online store that drives sales and growth.
                      From shopping cart integration to payment gateway setup,
                      we&apos;ve got everything you need to get your business up
                      and running online. Let&apos;s build your e-commerce
                      website today.
                    </p>
                  )}
                </div>
              </div>

              {/* box 5 */}

              <div
                onMouseOver={() => onMouseEnter(5)}
                onMouseLeave={onMouseLeave}
                className="bg-[#191825] h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image src="/seo (2).png" alt="" width={64} height={64} />
                  <strong>SEO</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 5 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 5 && isHover && (
                    <p className="text-black">
                      Boost your online visibility and drive more traffic to
                      your website with our SEO services. I&apos;ll help you
                      optimize your website for search engines, improve your
                      website&apos;s ranking, and drive more organic traffic to
                      your website.
                    </p>
                  )}
                </div>
              </div>

              {/* box 6 */}

              <div
                onMouseOver={() => onMouseEnter(6)}
                onMouseLeave={onMouseLeave}
                className="bg-orange_color h-[300px]  cursor-pointer relative flex items-center justify-center"
              >
                <div className="flex flex-col items-center justify-center text-white gap-2">
                  <Image
                    src="/wordpress (1).png"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <strong>Wordpress</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color transition-all  duration-300 w-full absolute bottom-0 left-0 overflow-auto ${
                    hoverBox === 6 && isHover ? 'h-full' : 'h-0'
                  }`}
                >
                  {hoverBox === 6 && isHover && (
                    <p className={`text-black`}>
                      Looking to build or optimize your website on WordPress? My
                      WordPress development and optimization services can help
                      you create a high-performing website that is visually
                      stunning and user-friendly. I&apos;ll help you with
                      everything from theme customization to plugin
                      installation, security optimization, and speed
                      optimization. Let&apos;s make your WordPress website stand
                      out from the crowd.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Services;
