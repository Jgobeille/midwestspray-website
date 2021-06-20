import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import SanityImageComponent from './SanityImageComponent';

const AboutHistoryComponent = ({
  title,
  description,
  date,
  image,
  imageCaption,
}) => {
  return (
    <div
      data-sal="slide-left"
      data-sal-duration="500"
      data-sal-delay="300"
      data-sal-easing="ease"
      className=""
    >
      <div className="story-section ">
        <div className="flex items-start flex-initial w-8 px-8 border-r-2 border-primary border-dashed  "></div>
        <div className="flex-col items-start flex-1 max-w-4xl px-8 text-xl font-semibold leading-snug tracking-tight text-justify md:text-xl">
          <h1 className="text-4xl font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
            {title}
          </h1>

          <time
            datetime="2017-09-01"
            className="block pt-1 text-2xl font-bold leading-none  uppercase text-celadon-blue-light"
          >
            {date}
          </time>

          <p className="mt-8 mb-12">{description}</p>
        </div>
      </div>
      <div class="flex flex-wrap lg:justify-left pl-4 h-full w-full md:w-1/2 mb-6 ">
        {image ? (
          <div class="p-4 text-center bg-white hover:bg-gray-100 hover:shadow-lg transition border rounded m-2 h-3/4 pb-10 sm:pb-auto sm:h-full flex flex-col justify-between">
            <GatsbyImage
              className={`h-full w-full `}
              image={image.asset.gatsbyImageData}
              alt={imageCaption}
              key={image.id}
            />
            <h2 class="text-sm sm:text-lg mb-0 text-gray-900">
              {imageCaption}
            </h2>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default AboutHistoryComponent;
