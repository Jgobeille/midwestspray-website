import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from 'src/components/Layout';

import PaintSprayer from 'src/images/paint-sprayer-transparent.png';

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <div className="sm:max-w-6xl pl-6 sm:pl-12 pr-6 sm:pr-12 pb-12 pt-20 mt-4 sm:m-auto ">
      <div className="flex flex-col sm:pb-10 md:pb-32 border-b-2 md:flex-row">
        <div className="flex flex-col order-2 sm:mb-10 order-2 justify-center max-w-md md:w-1/2">
          <div className="text-2xl font-main font-black md:text-5xl text-primary">
            <span className="">
              Local repair shop located in Cincinnati, Ohio
            </span>
          </div>
          <div className="mt-4 font-secondary text-xl">
            Midwest Spray has been serving the paint spray, pressure washer and
            compressor equipments markets in the Cincinnati area since 1984
          </div>
          <div className="h-16 my-5 mt-10">
            <Link
              to="/our-story"
              className="px-4 font-main py-2 text-white rounded-sm shadow-sm sm:relative sm:top-4 bg-celadon-blue-default hover:no-underline hover:bg-celadon-blue-dark"
            >
              Learn Our Story
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
          <div class=" flex flex-row animate-scroll slide-track ">
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
        <div className="flex flex-col pb-10 md:flex-row">
          <div className="flex flex-col mb-10 sm:mr-16 justify-center max-w-md md:w-1/2">
            <div className="font-alt font-black md:text-2xl text-primary">
              <h3 className="">PAINT SPRAYERS</h3>
            </div>
            <div className="mt-4 font-secondary text-md">
              Hey, whatcha watching? Fatal. Daddy Bender, we're hungry. This is
              the worst kind of discrimination: the kind against me! Too much
              work. Let's burn it and say we dumped it in the sewer.
            </div>
            <div className="mt-8">
              <Link
                to="/contact"
                className="px-4 mt-8 font-main py-2 text-white rounded-sm shadow-sm  sm:top-4 bg-celadon-blue-default hover:no-underline hover:bg-celadon-blue-dark"
              >
                Get a Quote
              </Link>
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="flex flex-col  max-w-md md:w-1/2"
          >
            <img className="h-full" src={PaintSprayer} alt="" />
          </div>
        </div>
        <div className="flex flex-col  pb-10 md:flex-row">
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="flex flex-col order-2 sm:order-1 max-w-md md:w-1/2"
          >
            <img className="h-full" src={PaintSprayer} alt="" />
          </div>
          <div className="flex flex-col order-1 sm:order-2 mb-10 sm:ml-16 justify-center max-w-md md:w-1/2">
            <div className="font-alt font-black md:text-2xl text-primary">
              <h3 className="">AIR COMPRESSORS</h3>
            </div>
            <div className="mt-4 font-secondary text-md">
              Hey, whatcha watching? Fatal. Daddy Bender, we're hungry. This is
              the worst kind of discrimination: the kind against me! Too much
              work. Let's burn it and say we dumped it in the sewer.
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-10 md:flex-row">
          <div className="flex flex-col mb-10 sm:mr-16 justify-center max-w-md md:w-1/2">
            <div className=" font-alt font-black md:text-2xl text-primary">
              <h3 className="">GENERATORS</h3>
            </div>
            <div className="mt-4 font-secondary text-md">
              Hey, whatcha watching? Fatal. Daddy Bender, we're hungry. This is
              the worst kind of discrimination: the kind against me! Too much
              work. Let's burn it and say we dumped it in the sewer.
            </div>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="flex flex-col  max-w-md md:w-1/2"
          >
            <img className="h-full" src={PaintSprayer} alt="" />
          </div>
        </div>
        <div className="flex flex-col pb-10 md:flex-row">
          <div
            data-sal="slide-right"
            data-sal-duration="500"
            data-sal-delay="300"
            data-sal-easing="ease"
            className="flex flex-col order-2 sm:order-1  max-w-md md:w-1/2"
          >
            <img className="h-full" src={PaintSprayer} alt="" />
          </div>
          <div className="flex flex-col order-1 sm:order-2 mb-10 sm:ml-16 justify-center max-w-md md:w-1/2">
            <div className="font-alt font-black md:text-2xl text-primary">
              <h3 className="">CONSTRUCTION HEATERS</h3>
            </div>
            <div className="mt-4 font-secondary text-md">
              Hey, whatcha watching? Fatal. Daddy Bender, we're hungry. This is
              the worst kind of discrimination: the kind against me! Too much
              work. Let's burn it and say we dumped it in the sewer.
            </div>
          </div>
        </div>
      </div>
      {/* What People Are Saying Section */}
      <h1 className="py-4 text-center text-primary font-slim text-brown">
        Have a Question?
      </h1>
      <div className="px-8 py-8 sm:py-16 bg-turquoise-blue-500 rounded-md">
        <div className="container md:px-10 lg:px-16 mx-auto ">
          <form className="sm:grid sm:gap-2 sm:grid-cols-2" action="POST">
            <div>
              <label htmlFor="first name">First Name</label>
              <br />
              <input
                type="text"
                placeholder="Hugh"
                className="rounded-sm form-input w-full border-0"
              />
            </div>
            <div>
              <label htmlFor="last name">Last Name</label>
              <br />
              <input
                type="text"
                placeholder="Jazz"
                className="rounded-sm form-input w-full border-0"
              />
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <br />
              <input
                type="email"
                placeholder="hughJazz@gmail.com"
                className="rounded-sm form-input w-full border-0"
              />
            </div>
            <div>
              <label htmlFor="company name">Company Name</label>
              <br />
              <input
                type="text"
                placeholder="Hugh's Jazz Company"
                className="rounded-sm form-input w-full border-0"
              />
            </div>
            <div className="col-span-2">
              <label htmlFor="how can we help?">How can we help?</label>
              <br />
              <select className="rounded-sm form-input w-full border-0 ">
                <option value="Need a quote">I need a quote</option>
                <option value="General Inquiry">
                  I have a general inquiry
                </option>
                <option value="Service call">Service call</option>
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                name="message"
                rows="5"
                className="rounded-sm w-full h-full border-0"
              ></textarea>
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="px-4 mt-8 font-secondary py-2 text-black bg-white rounded-sm shadow-sm  sm:top-4  hover:no-underline"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
