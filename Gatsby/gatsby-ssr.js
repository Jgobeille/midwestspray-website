/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Add here classes that you want applied to the `<html>` element
// more on Gastby-ssr: https://www.gatsbyjs.com/docs/api-files-gatsby-ssr/

import React from 'react';
import Layout from './src/components/Layout';

export function onRenderBody({ setHtmlAttributes }) {
  setHtmlAttributes({
    className: 'leading-normal text-lg font-body text-gray-900 antialiased',
  });
}

// this function wraps all pages with a Layout component, therefore it does not need to be included in all files
export function wrapPageElement({ element, props }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}> {element} </Layout>;
}
