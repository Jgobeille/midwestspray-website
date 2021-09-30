import React from 'react';
import { graphql, Link } from 'gatsby';
import LandFarmImage from '../images/land-at-sunset.jpg';

import SEO from '../components/SEO';
import { GatsbyImage } from 'gatsby-plugin-image';

export const data = graphql`
  query {
    posts: allSanityPost {
      nodes {
        slug {
          current
        }
        mainImage {
          asset {
            gatsbyImageData
          }
        }
        categories {
          title
        }
        title
      }
    }
  }
`;

const OurBlogPage = ({ data }) => {
  const { posts } = data;

  return (
    <>
      <SEO title="Our Blog" />

      <div className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="text-center text-primary ">Doug's Blog</h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {posts.nodes.map((post) => {
              return (
                <div className="p-4 md:w-1/3">
                  <div className="h-full hover:shadow-lg bg-white overflow-hidden border-2 border-gray-200 rounded-md">
                    <GatsbyImage
                      className="w-full mb-10 g-image g-image--lazy g-image--loaded"
                      image={post.mainImage?.asset?.gatsbyImageData}
                      // alt={post.alt}
                      key={post.id}
                    />
                    <div className="p-6">
                      {post.categories.map((category) => {
                        return (
                          <h2 className="mb-1 text-xs text-celadon-blue-default font-medium tracking-widest text-gray-500 title-font">
                            {category.title}
                          </h2>
                        );
                      })}
                      <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                        {post.title}
                      </h1>

                      <div className="flex flex-wrap items-center ">
                        <Link
                          className="inline-flex items-center font-main text-primary md:mb-2 lg:mb-0"
                          to={`${post.slug.current}`}
                        >
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlogPage;
