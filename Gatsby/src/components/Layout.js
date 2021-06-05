/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          company
        }
      }

      footer: sanityFooter {
        description
        socialMedia {
          facebook
          email
        }
        contactInfo {
          address
          addressURL
          email
          phoneNumber
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container mb-6 ">
        <main>{children}</main>
      </div>
      <Footer
        footerData={data.footer}
        companyName={data.site.siteMetadata.company}
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
