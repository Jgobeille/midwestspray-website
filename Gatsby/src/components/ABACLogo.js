import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const ABACLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/ABAC-logo.png"
      alt="ABAC logo"
      height={200}
      width={700}
    />
  );
};

export default ABACLogo;
