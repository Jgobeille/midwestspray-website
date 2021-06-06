import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const BinksDevilbissLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/binks-devilbiss-logo.jpeg"
      alt="Titan logo"
      height={200}
      width={200}
    />
  );
};

export default BinksDevilbissLogo;
