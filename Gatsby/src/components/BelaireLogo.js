import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const BelaireLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/BelAireLogo.png"
      alt="belaire logo"
      height="200"
      width="300"
    />
  );
};

export default BelaireLogo;
