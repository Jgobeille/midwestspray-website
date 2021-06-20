import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/SEO';
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
    homePage: sanityHomePage {
      button
      buttonUrl {
        page
      }
      description
      id
      repairSection {
        buttonUrl {
          page
        }
        description
        image {
          asset {
            gatsbyImageData
          }
        }
        alt
        title
        id
        button
      }
      topMessage
    }
  }
`;

const IndexPage = ({ data }) => {
  const { homePage } = data;

  return (
    <>
      <SEO title="Home" />

      <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 pb-12 pt-20 mt-4 sm:m-auto ">
        <div className="flex flex-col sm:pb-10 md:pb-32 border-b-2 md:flex-row">
          <div className="flex flex-col sm:mb-10 order-2 justify-center max-w-md md:w-1/2">
            <div className="text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
              <span className="">{homePage.topMessage}</span>
            </div>
            <div className="mt-4 font-secondary text-xl">
              {homePage.description}
            </div>
            <div className="h-16 my-5 mt-10">
              <Link
                to={homePage.buttonUrl.page}
                className="px-4 font-main py-2 text-white rounded-sm shadow-sm sm:relative sm:top-4 bg-celadon-blue-default hover:no-underline hover:bg-celadon-blue-dark"
              >
                {homePage.button}
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
        <h1 className="my-8 text-center text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
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
          <h1 className="text-center my-8 text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
            What We Repair
          </h1>
          {homePage.repairSection.map(
            (
              {
                id,
                addButton,
                button,
                buttonUrl,
                description,
                image,
                alt,
                title,
              },
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
                  alt={alt}
                  textClasses={
                    'flex flex-col order-1 mb-10 sm:mr-16 justify-center max-w-md md:w-1/2 '
                  }
                  imageClasses={'flex flex-col order-2  max-w-md md:w-1/2'}
                  slideDirection={'slide-left'}
                />
              ) : (
                <WhatWeRepair
                  key={id}
                  addButton={addButton}
                  buttonText={button}
                  buttonUrl={buttonUrl}
                  description={description}
                  image={image}
                  alt={alt}
                  title={title}
                  textClasses={
                    'flex flex-col order-1 md:order-2 mb-10 sm:ml-16 justify-center max-w-md md:w-1/2 '
                  }
                  imageClasses={
                    'flex flex-col order-2 md:order-1  max-w-md md:w-1/2'
                  }
                  slideDirection={'slide-right'}
                />
              );
            }
          )}
        </div>
        {/* Contact Section */}
        <h1 className="text-center my-8 text-4xl font-main font-bold leading-none text-primary md:text-5xl lg:text-6xl ">
          Have a Question?
        </h1>

        <ContactForm
          containerStyles={
            'full-width md:inset-x-0 md:w-full md:mx-0 md:px-8 py-8 sm:py-16 bg-turquoise-blue-500 rounded-md '
          }
          formStyles={'sm:grid sm:gap-2 sm:grid-cols-2'}
          formContainerStyles={'container px-5 md:px-10 lg:px-16 mx-auto '}
          animation={'fade'}
          duration={'1000'}
          delay={'300'}
          easing={'ease'}
        />
      </div>
    </>
  );
};

export default IndexPage;
