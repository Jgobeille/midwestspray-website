import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const GracoLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/graco-logo.jpeg"
      alt="Graco logo"
      height="200"
      width="200"
    />
  );
};

export default GracoLogo;
