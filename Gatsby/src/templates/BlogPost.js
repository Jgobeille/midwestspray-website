import React from 'react';

import { graphql } from 'gatsby';
import LandFarmImage from '../images/land-at-sunset.jpg';

import SEO from '../components/SEO';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

import { GatsbyImage } from 'gatsby-plugin-image';
import BlockContent from '@sanity/block-content-to-react';

export const data = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      categories {
        description
        title
      }
      slug {
        current
      }
      title
      _rawBody
      mainImage {
        asset {
          gatsbyImageData
        }
      }
      tags {
        value
        label
      }
    }
  }
`;

const SingleBlogPost = ({ data }) => {
  const { post } = data;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.mainImage}
        pathname={window.location.pathname}
      />

      <div className="flex-grow max-w-4xl px-4 mx-auto mt-10 lg:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <GatsbyImage
              className="w-full mb-10 g-image g-image--lazy g-image--loaded"
              image={post.mainImage?.asset?.gatsbyImageData}
              // alt={post.alt}
              key={post.id}
            />

            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div className="flex flex-col justify-evenly ">
                <h1 className="mb-2 text-primary">{post.title}</h1>
                <div className="flex sm:flex-row">
                  {post.categories.map((category) => {
                    return (
                      <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-celadon-blue-default ">
                        {category.title}
                      </span>
                    );
                  })}

                  {post.tags.map((tag) => {
                    return (
                      <span className="hidden mb-4 mr-2 text-celadon-blue-dark bg-gray-100 md:block prd-tag">
                        {`#${tag.value}`}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-row md:flex-col">
                <FacebookShareButton
                  className="mr-2 mb-2 sm:mr-0"
                  url={`${window.location.href}/${post.slug.current}`}
                >
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  className="mr-2 mb-2 sm:mr-0"
                  url={`${window.location.href}/${post.slug.current}`}
                >
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <EmailShareButton
                  className="mb-2"
                  url={`${window.location.href}/${post.slug.current}`}
                >
                  <EmailIcon size={40} round={true} />
                </EmailShareButton>
              </div>
            </div>
            <div>
              <BlockContent
                className="prose prose-sm prose-black mb-6"
                blocks={post._rawBody}
                projectId="wgpo4u84"
                dataset="production"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogPost;
