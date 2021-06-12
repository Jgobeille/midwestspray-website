import SanityImage from 'gatsby-plugin-sanity-image';

import React from 'react';

const SanityImageComponent = ({ styles, source, height, width, alt }) => (
  <div className={styles}>
    <SanityImage
      // pass asset, hotspot, and crop fields
      {...source}
      // tell Sanity how large to make the image (does not set any CSS)
      width={width}
      height={height}
      // style it how you want it
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
      alt={alt}
    />
  </div>
);

export default SanityImageComponent;
