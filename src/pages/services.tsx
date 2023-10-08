import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
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
                style={{ width: "50%" }}
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
              please don&apos;t hesitate to{" "}
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
                    hoverBox === 1 && isHover ? "h-full" : "h-0"
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
                  <strong>Frontend Developer</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 2 && isHover ? "h-full" : "h-0"
                  }`}
                >
                  {hoverBox === 2 && isHover && (
                    <p className="text-black">
                      I specialize in creating engaging and responsive user
                      interfaces using a stack of cutting-edge technologies.
                      With expertise in TypeScript, React, Next.js, Tailwind
                      CSS, JavaScript, CSS, and HTML, I craft visually stunning
                      and highly interactive web applications. My focus on
                      responsive design ensures that your website or web app
                      looks and functions seamlessly across all devices.
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
                  <Image src="/api.png" alt="" width={64} height={64} />

                  <strong>Backend Developer</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 3 && isHover ? "h-full" : "h-0"
                  }`}
                >
                  {hoverBox === 3 && isHover && (
                    <p className="text-black">
                      With expertise in Node.js, Express, MongoDB, MySQL, and a
                      range of other technologies, I specialize in crafting
                      robust and efficient web APIs. Whether you need to build
                      APIs from scratch, optimize existing ones, or ensure
                      seamless data flow for your web applications, I&apos;ve got you
                      covered.
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
                    src="/mobile-development.png"
                    alt=""
                    width={64}
                    height={64}
                  />
                  <strong>Mobile App Development</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color overflow-auto transition-all  duration-300 w-full absolute bottom-0 left-0 ${
                    hoverBox === 4 && isHover ? "h-full" : "h-0"
                  }`}
                >
                  {hoverBox === 4 && isHover && (
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
                    hoverBox === 5 && isHover ? "h-full" : "h-0"
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
                  <Image src="/shopify.png" alt="" width={100} height={100} />
                  <strong>Shopify Developer</strong>
                </div>
                <div
                  className={`flex items-center justify-center px-2 bg-blue_color transition-all  duration-300 w-full absolute bottom-0 left-0 overflow-auto ${
                    hoverBox === 6 && isHover ? "h-full" : "h-0"
                  }`}
                >
                  {hoverBox === 6 && isHover && (
                    <p className={`text-black`}>
                      Seeking a Shopify Developer to enhance your online store?
                      As an experienced Shopify developer, I specialize in using
                      Shopify Liquid to add custom features and optimize your
                      e-commerce website. Whether you need theme customization,
                      plugin installation, security optimization, or speed
                      improvements, I can help you create a visually stunning
                      and user-friendly Shopify store that stands out from the
                      competition.
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
