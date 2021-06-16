import { graphql } from 'gatsby';
import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';

export const data = graphql`
  query {
    contactData: sanityFooter {
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
    description: sanityContactPage {
      _rawDescription
    }
  }
`;

const ContactPage = ({ data }) => {
  const { contactData, description } = data;

  console.log(data);

  return (
    <>
      <SEO title="Contact Us" />

      <div className="py-12">
        <div className="container py-6">
          <h1 className="py-4 text-center text-primary font-slim text-brown">
            Contact Us
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col sm:mb-10 order-2 justify-center md:w-1/2">
              <ContactForm
                containerStyles={'py-8 bg-turquoise-blue-500 rounded-md'}
                formContainerStyles={'container px-5 mx-auto '}
                animation={''}
                duration={''}
                delay={''}
                easing={''}
              />
            </div>
            <div className="flex flex-col w-full order-1 px-4 md:px-0 mb-8 md:mb-0 sm:mr-2 sm:order-1  md:justify-start md:w-1/2">
              <div className="flex flex-col">
                <div>
                  <BlockContent
                    className="prose prose-sm prose-black mb-6"
                    blocks={description._rawDescription}
                    projectId="wgpo4u84"
                    dataset="production"
                  />
                  {/* <p className="text-black md:text-md">
                    Morbo will now introduce tonight's candidates… PUNY HUMAN
                    NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend,
                    Richard Nixon. We'll need to have a look inside you with
                    this camera. Bender, I didn't know you liked cooking. That's
                    so cute.
                  </p> */}
                </div>
                <div className=" flex flex-col mb-6">
                  {contactData.contactInfo.address ? (
                    <a
                      className="no-underline mb-1 font-secondary text-black text-md"
                      href={contactData.contactInfo.addressURL}
                    >
                      {' '}
                      {contactData.contactInfo.address}
                    </a>
                  ) : (
                    ''
                  )}

                  {contactData.contactInfo.phoneNumber ? (
                    <a
                      className="no-underline mb-1 font-secondary text-black text-md"
                      href={`tel:+${contactData.contactInfo.phoneNumber}`}
                    >
                      {contactData.contactInfo.phoneNumber}
                    </a>
                  ) : (
                    ''
                  )}
                  {contactData.contactInfo.email ? (
                    <a
                      className="no-underline mb-1 font-secondary text-black text-md"
                      href={`mailto:${contactData.contactInfo.email}`}
                    >
                      {contactData.contactInfo.email}
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                {contactData.socialMedia.facebook ? (
                  <a href={contactData.socialMedia.facebook}>
                    <svg
                      className="w-6 h-6 mr-4 fill-current text-black hover:text-turquoise-blue-500"
                      viewBox="0 0 512 512"
                    >
                      <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                    </svg>
                  </a>
                ) : (
                  ''
                )}
                {contactData.socialMedia.email ? (
                  <a href={`mailto:${contactData.socialMedia.email}`}>
                    <svg
                      fill="none"
                      className="w-6 h-6 mr-4 text-black hover:text-turquoise-blue-500"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
