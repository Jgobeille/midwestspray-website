import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const CHLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/Cambell-Hausfeld-Logo.jpeg"
      alt="Campbell Hausfeld logo"
      height={200}
      width={200}
    />
  );
};

export default CHLogo;
