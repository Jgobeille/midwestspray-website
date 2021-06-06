import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

const GeneralPumpLogo = () => {
  return (
    <StaticImage
      className="mx-2"
      src="../images/general-pump-logo.jpeg"
      alt="General Pump logo"
      height={200}
      width={200}
    />
  );
};

export default GeneralPumpLogo;
