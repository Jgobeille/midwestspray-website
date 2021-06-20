import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';

import AboutHistoryComponent from '../components/AboutHistoryComponent';

import { GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  query MyQuery {
    about: sanityAboutPage {
      aboutTopTitle
      aboutSectionDescription
      aboutSectionImage {
        asset {
          gatsbyImageData
        }
      }
      aboutSectionImageAlt
      aboutSectionTitle
      aboutTitleDescription
      aboutTitleImage {
        asset {
          gatsbyImageData
        }
      }
      aboutTitleImageAlt
      history {
        imageCaption
        date(formatString: "MMMM-YYYY")
        description
        image {
          asset {
            gatsbyImageData
          }
        }
        title
      }
      photoGallery {
        images {
          alt
          display
          asset {
            id
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const AboutPage = ({ data }) => {
  const { about } = data;

  let delay = 0;

  return (
    <>
      <SEO title="Our Story" />
      <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 py-12 mt-4 sm:m-auto overflow-hidden">
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
            <GatsbyImage
              className={`h-full w-full `}
              image={about.aboutTitleImage.asset.gatsbyImageData}
              alt={about.aboutTitleImageAlt}
            />
          </div>
        </div>
        <div className="flex flex-col sm:py-8 md:py-16 sm:pb-10 md:pb-16 border-b-2 md:flex-row">
          {/* Hero Section */}
          <div className="flex flex-col w-full mb-8 md:justify-center md:items-center order-2 md:order-1">
            <GatsbyImage
              className={`h-full w-full `}
              image={about.aboutSectionImage.asset.gatsbyImageData}
              alt={about.aboutSectionImageAlt}
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
                  width
                />
              );
            }
          )}
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="text-center text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
            Gallery
          </h1>

          <div className="md:grid md:grid-cols-masonry md:gap-4">
            {about.photoGallery.images.map((image) => {
              delay += 100;
              return (
                <span
                  data-sal="flip-up"
                  data-sal-duration="500"
                  data-sal-delay={delay}
                  data-sal-easing="ease"
                  className={image.display}
                >
                  <GatsbyImage
                    className={`h-full w-full `}
                    image={image.asset.gatsbyImageData}
                    alt={image.alt}
                    key={image.id}
                  />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
