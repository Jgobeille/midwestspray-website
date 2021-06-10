import React from 'react';
import { Link } from 'gatsby';
import LandFarmImage from '../images/land-at-sunset.jpg';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const BlogPostPage = () => (
  <Layout>
    <SEO title="Post - Blog" />

    <div className="flex-grow max-w-4xl px-4 mx-auto mt-10 lg:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="w-full">
          <img
            alt="featured image"
            src={LandFarmImage}
            className="w-full mb-10 g-image g-image--lazy g-image--loaded"
          ></img>
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="flex flex-col justify-evenly ">
              <h1 className="mb-2 text-primary">Our Wonderful Farm</h1>
              <div className="flex sm:flex-row">
                <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-celadon-blue-default ">
                  Farms
                </span>
                <span className="w-20 mb-4 mr-2 text-white sm:w-auto prd-tag bg-celadon-blue-light ">
                  5 Min.
                </span>
                <span className="hidden mb-4 mr-2 text-celadon-blue-dark bg-gray-100 md:block prd-tag">
                  #organic
                </span>
                <span className="hidden mb-4 text-celadon-blue-dark bg-gray-100 md:block prd-tag">
                  #farming
                </span>
              </div>
            </div>

            <div className="flex flex-row md:flex-col">
              <FacebookShareButton
                className="mr-2 mb-2 sm:mr-0"
                url={'www.github.com'}
              >
                <FacebookIcon size={40} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                className="mr-2 mb-2 sm:mr-0"
                url={'www.github.com'}
              >
                <TwitterIcon size={40} round={true} />
              </TwitterShareButton>
              <EmailShareButton className="mb-2" url={'www.github.com'}>
                <EmailIcon size={40} round={true} />
              </EmailShareButton>
            </div>
          </div>
          <div className="font-light text-slim">
            <p>
              Have you ever imagined a place where you could travel and see only
              beauty? What would that be like? Could it really work in this day
              and age?
            </p>
            <p>
              <strong>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </strong>
            </p>
            <h2 className="head-3">Where Is The Farm?</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
            <h2 className="head-3">What Are The Rules?</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default BlogPostPage;
