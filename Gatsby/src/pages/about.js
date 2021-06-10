import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import FarmImage from '../images/land-at-sunset.jpg';
import SEO from '../components/SEO';
import SpraymanImageV2 from '../components/SpraymanImageV2';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => (
  <Layout>
    <SEO title="Our Story" />
    <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 pb-12 pt-20 mt-4 sm:m-auto ">
      <div className="flex flex-col sm:pb-10 sm:py-8 md:py-16 border-b-2 md:flex-row">
        <div className="flex flex-col justify-center max-w-md md:w-1/2">
          <div className="text-2xl font-main font-black md:text-5xl text-primary">
            <span className="">Meet the original Sprayman</span>
          </div>
          <div className="mt-4 font-secondary text-xl">
            Spare me your space age technobabble, Attila the Hun! I love you,
            buddy! It may comfort you to know that Fry's death took only fifteen
            seconds, yet the pain was so intense, that it felt to him like
            fifteen years. And it goes without saying, it caused him to empty
            his bowels.
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-col w-full my-8 justify-center items-center md:w-1/2">
          <StaticImage
            className="mx-2"
            src="../images/15317845_10155626711903521_4624180674135475803_n.jpg"
            alt="dad-car"
          />
        </div>
      </div>
      <div className="flex flex-col sm:py-8 md:py-16 sm:pb-10 md:pb-16 border-b-2 md:flex-row">
        {/* Hero Section */}
        <div className="flex flex-col w-full mb-8 md:justify-center md:items-center order-2 md:order-1">
          <SpraymanImageV2 />
        </div>
        <div className="flex flex-col w-full my-8  md:ml-8 justify-center order-1 md:order-2">
          <div className="text-2xl font-alt md:text-4xl text-primary">
            <p className="uppercase">Meet the original Sprayman</p>
          </div>
          <div className="mt-4 font-secondary text-xl">
            Spare me your space age technobabble, Attila the Hun! I love you,
            buddy! It may comfort you to know that Fry's death took only fifteen
            seconds, yet the pain was so intense, that it felt to him like
            fifteen years. And it goes without saying, it caused him to empty
            his bowels.
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-16 -mx-8 justify-left border-b-2">
        <div
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <div className="story-section">
            <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed"></div>
            <div className="flex-col items-start flex-1 max-w-4xl px-8 text-xl font-semibold leading-snug tracking-tight text-justify md:text-xl">
              <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
                An Idea Is Born
              </h1>

              <time
                datetime="2017-09-01"
                className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
              >
                April 2018
              </time>

              <p className="mt-8 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
                mauris pellentesque pulvinar.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:justify-left pl-4 h-full w-full md:w-1/2 mb-6 ">
            <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
              <img
                class="rounded sm:w-full mx-auto"
                alt="Burris Custom Turrets"
                src={FarmImage}
              ></img>
              <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
            </div>
          </div>
        </div>
        <div
          data-sal="slide-left"
          data-sal-duration="500"
          data-sal-delay="300"
          data-sal-easing="ease"
        >
          <div className="story-section">
            <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed"></div>

            <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
              <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
                A Company Is Born
              </h1>

              <time
                datetime="2018-03-01"
                className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
              >
                May 2018
              </time>

              <p className="mt-8 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
                odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
                mauris pellentesque pulvinar.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap lg:justify-left">
            <div class="flex flex-wrap lg:justify-left pl-4 h-full w-full md:w-1/2 mb-6">
              <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
                <img
                  class="rounded sm:w-full mx-auto"
                  alt="Burris Custom Turrets"
                  src={FarmImage}
                ></img>
                <h2 class="text-sm sm:text-lg mb-0 text-gray-900">Burris</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
            <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
              A Farm Comes Into Life
            </h1>

            <time
              datetime="2018-05-01"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              Jan 2019
            </time>

            <p className="mt-8 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              mauris pellentesque pulvinar.
            </p>
          </div>
        </div>
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
            <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
              A Farm Is Funded
            </h1>

            <time
              datetime="2018-12-31"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              July 2020
            </time>

            <p className="mt-8 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              mauris pellentesque pulvinar.
            </p>
          </div>
        </div>
        <div className="story-section">
          <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed"></div>

          <div className="flex-col items-start flex-1 max-w-4xl px-8 mt-16 text-xl font-semibold leading-snug tracking-tight text-justify">
            <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
              Growth
            </h1>

            <time
              datetime="2019-11-18"
              className="block pt-1 text-2xl font-bold leading-none text-gray-400 uppercase text-secondary"
            >
              July 2020
            </time>

            <p className="mt-8 mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
              odio ut sem nulla pharetra. Rhoncus aenean vel elit scelerisque
              mauris pellentesque pulvinar.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-8 border-b-2">
        <h1 className="text-center text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
          Gallery
        </h1>

        <div className="md:grid md:grid-cols-masonry md:gap-4">
          <span
            className="row-span-2"
            data-sal="flip-up"
            data-sal-duration="500"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <StaticImage
              className="h-full w-full  "
              src="../images/simplicity-farms.jpg"
              alt="dad-car"
            />
          </span>
          <span
            className="row-span-2 col-span-2 row-span-2"
            data-sal="flip-up"
            data-sal-duration="500"
            data-sal-delay="150"
            data-sal-easing="ease"
          >
            <StaticImage
              className="h-full w-full"
              src="../images/paint-sprayer.jpeg"
              alt="dad-car"
            />
          </span>
          <span
            className="col-span-2"
            data-sal="flip-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <StaticImage
              className="h-full w-full "
              src="../images/logo.png"
              alt="dad-car"
            />
          </span>
          <StaticImage
            className="h-full w-full col-span-2 row-span-2"
            src="../images/generator-image.png"
            alt="dad-car"
          />
          <StaticImage
            className="h-full w-full"
            src="../images/paint-sprayer.jpeg"
            alt="dad-car"
          />
          <StaticImage
            className="h-full w-full"
            src="../images/generator-image.png"
            alt="dad-car"
          />
          <StaticImage
            className="h-full w-full row-span-2"
            src="../images/simplicity-farms.jpg"
            alt="dad-car"
          />
          <StaticImage
            className="h-full w-full col-span-2"
            src="../images/logo.png"
            alt="dad-car"
          />
          <StaticImage
            className="h-full w-full"
            src="../images/paint-sprayer.jpeg"
            alt="dad-car"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
