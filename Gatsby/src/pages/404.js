import React from 'react';

import SEO from '../components/SEO';

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 pb-12 pt-20 mt-4 sm:m-auto ">
      <h1 className="font-main">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </>
);

export default NotFoundPage;
