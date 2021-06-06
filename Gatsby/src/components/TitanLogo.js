import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const TitanLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/titan-tool-logo.jpeg"
      alt="Titan logo"
      height={200}
      width={250}
    />
  );
};

export default TitanLogo;
