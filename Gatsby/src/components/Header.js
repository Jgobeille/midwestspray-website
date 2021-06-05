import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import mainLogo from '../images/midwest-spray-logo.png';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="sticky top-0 w-full mt-0 bg-ghost-white shadow-sm z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="">
          <div className="no-underline opacity-100 hover:text-white hover:no-underline">
            <span className="pl-2 text-2xl text-blue">
              <img
                className="absolute"
                alt="Simplicity Farms"
                className="inline w-48"
                src={mainLogo}
              />
              {/* {siteTitle} */}
            </span>
          </div>
        </Link>
        <div
          className={`${
            isExpanded ? `hidden` : `hidden`
          } sm:hidden md:hidden lg:block text-lg`}
        >
          {[
            {
              route: `/our-story`,
              title: `Home`,
            },
            {
              route: `/our-team`,
              title: `Equipment`,
            },
            {
              route: `/our-farm`,
              title: `About`,
            },
            {
              route: `/our-blog`,
              title: `Dougs Blog`,
            },
            {
              route: `/our-products`,
              title: `Services`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 font-main hover:text-secondary text-slim text-primary hover:text-black hover:no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 font-main py-2 ml-6 text-white rounded-sm shadow-sm sm:relative sm:top-4 hover:no-underline bg-celadon-blue-default hover:bg-celadon-blue-dark"
          >
            <span className="main-font">Contact Us</span>
          </Link>
        </div>
        <div className="block lg:hidden">
          {/* beginning of hamburger */}
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="flex items-center px-3 py-2 border rounded text-primary border-primary hover:text-secondary hover:border-secondary"
          >
            <svg
              className="w-3 h-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Hamburger Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
          {/* beginning of small navbar */}
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } lg:hidden text-lg relative float-right inline-block text-left`}
          >
            <div className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg">
              <div className="bg-white rounded-md shadow-xs">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {[
                    {
                      route: `/our-story`,
                      title: `Our Story`,
                    },
                    {
                      route: `/our-team`,
                      title: `Our Team`,
                    },
                    {
                      route: `/our-farm`,
                      title: `Our Farm`,
                    },
                    {
                      route: `/our-blog`,
                      title: `Our Blog`,
                    },
                    {
                      route: `/our-products`,
                      title: `Our Products`,
                    },
                    {
                      route: `/contact`,
                      title: `Contact Us`,
                    },
                  ].map((link) => (
                    <Link
                      className="block font-main px-4 py-2 font-light leading-1 hover:text-secondary text-slim text-primary hover:text-black focus:bg-gray-100 focus:text-secondary hover:no-underline"
                      key={link.title}
                      to={link.route}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
