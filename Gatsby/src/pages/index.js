import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from 'src/components/Layout';

import SEO from 'src/components/SEO';
import SpraymanImage from '../components/SpraymanImage';
import TitanLogo from '../components/TitanLogo';
import ABACLogo from '../components/ABACLogo';
import EatonLogo from '../components/EatonLogo';
import CHLogo from '../components/CHLogo';
import BinksDevilbissLogo from '../components/BinksDevilbiss';
import BelaireLogo from '../components/BelaireLogo';
import GeneralPumpLogo from '../components/GeneralPumpLogo';
import GracoLogo from '../components/GracoLogo';
import WagnerLogo from '../components/WagnerLogo';
import WhatWeRepair from '../components/WhatWeRepair';
import ContactForm from '../components/ContactForm';

export const query = graphql`
  query {
    topSection: sanityHomePageTopSection {
      id
      button
      buttonUrl
      description
      topMessage
    }
    repairSection: allSanityHomePageRepairSection {
      nodes {
        id
        title
        button
        buttonUrl
        description
        addButton
        image {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data }) => {
  const { topSection, repairSection } = data;
  return (
    <Layout>
      <SEO title="Home" />

      <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 pb-12 pt-20 mt-4 sm:m-auto ">
        <div className="flex flex-col sm:pb-10 md:pb-32 border-b-2 md:flex-row">
          <div className="flex flex-col sm:mb-10 order-2 justify-center max-w-md md:w-1/2">
            <div className="text-2xl font-main font-black md:text-5xl text-primary">
              <span className="">{topSection.topMessage}</span>
            </div>
            <div className="mt-4 font-secondary text-xl">
              {topSection.description}
            </div>
            <div className="h-16 my-5 mt-10">
              <Link
                to={topSection.buttonUrl}
                className="px-4 font-main py-2 text-white rounded-sm shadow-sm sm:relative sm:top-4 bg-celadon-blue-default hover:no-underline hover:bg-celadon-blue-dark"
              >
                {topSection.button}
              </Link>
            </div>
          </div>
          {/* Hero Section */}
          <div className="flex flex-col w-full order-1 sm:order-2 -mt-5 md:justify-center md:items-center md:w-1/2">
            <div className="hidden sm:block sm:animate-spin1 absolute bg-minion-yellow-500 w-48 h-48 rounded"></div>
            <div className="hidden sm:block sm:animate-spin2 absolute bg-minion-yellow-500 w-48 h-48 rounded"></div>
            <div className="hidden sm:block sm:animate-spin3 absolute bg-minion-yellow-500 w-48 h-48 rounded"></div>
            <SpraymanImage />
            <div className="relative h-px w-20 -mb-10 md:animate-float-with-shadow  text-ghost-white"></div>
          </div>
        </div>
        {/* Warranty Section*/}
        <h1 className="py-4 text-center font-slim text-primary">
          Warranty Service Center for
        </h1>
        {/* <div className="relative left-50 right-50 -ml-50 -mr-50 pt-2 pb-6 mx-auto border-b-2"> */}
        <div className="pt-2 pb-6 mx-auto overflow-hidden border-b-2">
          <div className="flex justify-center w-3800 pl-6 my-4 overflow-hidden">
            <div className=" flex flex-row animate-scroll slide-track ">
              <ABACLogo />
              <BelaireLogo />
              <EatonLogo />
              <CHLogo />
              <BinksDevilbissLogo />
              <GeneralPumpLogo />
              <GracoLogo />
              <TitanLogo />
              <WagnerLogo />
              <ABACLogo />
              <BelaireLogo />
              <EatonLogo />
            </div>
          </div>
        </div>
        {/* Our Products Section */}
        <div className=" pt-2 pb-6  mt-2 border-b-4 sm:block">
          <h1 className="py-4 text-center text-primary font-slim text-brown">
            What We Repair
          </h1>
          {repairSection.nodes.map(
            (
              { id, addButton, button, buttonUrl, description, image, title },
              i
            ) => {
              return i % 2 == 0 ? (
                <WhatWeRepair
                  key={id}
                  addButton={addButton}
                  buttonText={button}
                  buttonUrl={buttonUrl}
                  description={description}
                  image={image}
                  title={title}
                  textClasses={
                    'flex flex-col order-1 mb-10 sm:mr-16 justify-center max-w-md md:w-1/2'
                  }
                  imageClasses={'flex flex-col order-2  max-w-md md:w-1/2'}
                />
              ) : (
                <WhatWeRepair
                  key={id}
                  addButton={addButton}
                  buttonText={button}
                  buttonUrl={buttonUrl}
                  description={description}
                  image={image}
                  title={title}
                  textClasses={
                    'flex flex-col order-2 mb-10 sm:ml-16 justify-center max-w-md md:w-1/2'
                  }
                  imageClasses={'flex flex-col order-1  max-w-md md:w-1/2'}
                />
              );
            }
          )}
        </div>
        {/* Contact Section */}
        <h1 className="py-4 text-center text-primary font-slim text-brown">
          Have a Question?
        </h1>
        <ContactForm
          containerStyles={
            'px-8 py-8 sm:py-16 bg-turquoise-blue-500 rounded-md'
          }
          formStyles={'sm:grid sm:gap-2 sm:grid-cols-2'}
          formContainerStyles={'container md:px-10 lg:px-16 mx-auto '}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
