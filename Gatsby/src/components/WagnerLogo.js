import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const WagnerLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/logo-wagner.png"
      alt="Wagner logo"
      height="200"
      width="500"
    />
  );
};

export default WagnerLogo;
