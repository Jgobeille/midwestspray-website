import React from 'react';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { StaticImage } from 'gatsby-plugin-image';

const SpraymanImage = () => {
  return (
    <StaticImage
      className="mb-14 sm:mb-0 sm:animate-float sm:-mt-20"
      src="../images/spraymanv2-transparent.png"
      alt="Sprayman superhero"
      placeholder="blurred"
      layout="constrained"
      width={500}
      height={800}
    />
  );
};

export default SpraymanImage;
