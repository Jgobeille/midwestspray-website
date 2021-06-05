import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const EatonLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/eaton-air-compressor-2.png"
      alt="Eaton logo"
      height="200"
      width="300"
    />
  );
};

export default EatonLogo;
