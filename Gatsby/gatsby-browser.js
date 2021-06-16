/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Import the main Tailwind file
import './src/css/style.css';

import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}> {element} </Layout>;
}
