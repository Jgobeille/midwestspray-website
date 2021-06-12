import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import FarmImage from '../images/land-at-sunset.jpg';
import SEO from '../components/SEO';
import SpraymanImageV2 from '../components/SpraymanImageV2';
import { StaticImage } from 'gatsby-plugin-image';
import SanityImageComponent from '../components/SanityImageComponent';
import SanityImage from 'gatsby-plugin-sanity-image';
import AboutHistoryComponent from '../components/AboutHistoryComponent';

export const query = graphql`
  query MyQuery {
    about: sanityAboutPage {
      aboutSectionDescription
      aboutSectionTitle
      aboutSectionImage {
        ...ImageWithPreview
      }
      aboutTitleDescription
      aboutTitleImage {
        ...ImageWithPreview
      }
      aboutTopTitle
      history {
        description
        title
        date(formatString: "MMMM-YYYY")
        image {
          ...ImageWithPreview
        }
        imageCaption
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const { about } = data;

  return (
    <Layout>
      <SEO title="Our Story" />
      <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 py-12 mt-4 sm:m-auto ">
        <div className="flex flex-col sm:pb-10 sm:py-8 border-b-2 md:flex-row">
          <div className="flex flex-col justify-center max-w-md md:w-1/2">
            <div className="text-2xl font-main font-black md:text-5xl text-primary">
              <span className="">{about.aboutTopTitle}</span>
            </div>
            <div className="mt-4 font-secondary text-xl">
              {about.aboutTitleDescription}
            </div>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col w-full my-8 justify-center items-center md:w-1/2">
            <SanityImageComponent
              source={about.aboutTitleImage}
              styles={'mx-2'}
            />
          </div>
        </div>
        <div className="flex flex-col sm:py-8 md:py-16 sm:pb-10 md:pb-16 border-b-2 md:flex-row">
          {/* Hero Section */}
          <div className="flex flex-col w-full mb-8 md:justify-center md:items-center order-2 md:order-1">
            <SanityImageComponent
              source={about.aboutSectionImage}
              styles={'mx-2'}
              width={500}
              height={800}
            />
          </div>
          <div className="flex flex-col w-full my-8  md:ml-8 justify-center order-1 md:order-2">
            <div className="text-2xl font-alt md:text-4xl text-primary">
              <p className="uppercase">{about.aboutSectionTitle}</p>
            </div>
            <div className="mt-4 font-secondary text-xl">
              {about.aboutSectionDescription}
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-16 -mx-8 justify-left border-b-2">
          {about.history.map(
            ({ title, description, date, image, imageCaption }) => {
              return (
                <AboutHistoryComponent
                  title={title}
                  description={description}
                  date={date}
                  image={image}
                  imageCaption={imageCaption}
                />
              );
            }
          )}
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
};

export default AboutPage;
