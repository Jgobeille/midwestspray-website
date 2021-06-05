import React from 'react';

import PaintSprayer from 'src/images/paint-sprayer-transparent.png';

import { Link } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const WhatWeRepair = ({
  title,
  description,
  addButton,
  buttonText,
  buttonUrl,
  image,
  textClasses,
  imageClasses,
}) => {
  return (
    <div className="flex flex-col pb-10 md:flex-row">
      <div className={textClasses}>
        <div className="font-alt font-black md:text-2xl text-primary">
          <h3 className="">{title}</h3>
        </div>
        <div className="mt-4 font-secondary text-md">{description}</div>
        {addButton ? (
          <div className="mt-8">
            <Link
              to={buttonUrl}
              className="px-4 mt-8 font-main py-2 text-white rounded-sm shadow-sm  sm:top-4 bg-celadon-blue-default hover:no-underline hover:bg-celadon-blue-dark"
            >
              {buttonText}
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>

      <div
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-delay="300"
        data-sal-easing="ease"
        className={imageClasses}
      >
        {' '}
        <img src={image.asset.fluid.src} alt="" />
      </div>
    </div>
  );
};

export default WhatWeRepair;
