import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import React from 'react';

const Footer = ({ companyName, contactData }) => {
  const { contactInfo, socialMedia } = contactData;
  return (
    <footer className="w-full sm:px-4 py-6 shadow-sm bg-celadon-blue-default">
      <div className="container  mb-10 pl-6 pr-6 sm:pl-20 sm:pr-20 sm:grid sm:grid-cols-4 sm:gap-x-6 ">
        <div className="flex flex-col mb-10">
          <h3 className="font-main mb-4 text-white text-lg">Midwest Spray</h3>
          <p className="font-secondary mb-4 text-white text-xs">
            {contactData.description}
          </p>
          <div className="flex flex-row">
            {socialMedia.facebook ? (
              <a href={socialMedia.facebook}>
                <span className="hidden">Facebook</span>
                <svg
                  className="w-6 h-6 mr-4 fill-current text-white hover:text-secondary"
                  viewBox="0 0 512 512"
                >
                  <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                </svg>
              </a>
            ) : (
              ''
            )}
            {socialMedia.email ? (
              <a href={`mailto:${socialMedia.email}`}>
                <span className="hidden">Email</span>
                <svg
                  fill="none"
                  className="w-6 h-6 mr-4 text-white hover:text-secondary"
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
        <div className="flex flex-col">
          <h3 className="font-main mb-4 text-white text-lg">Contact</h3>

          {contactInfo.address ? (
            <a
              className="no-underline mb-1 font-secondary text-white text-xs"
              href={contactInfo.addressURL}
            >
              {' '}
              {contactInfo.address}
            </a>
          ) : (
            ''
          )}

          {contactInfo.phoneNumber ? (
            <a
              className="no-underline mb-1 font-secondary text-white text-xs"
              href={`tel:+${contactInfo.phoneNumber}`}
            >
              {contactInfo.phoneNumber}
            </a>
          ) : (
            ''
          )}
          {contactInfo.email ? (
            <a
              className="no-underline mb-1 font-secondary text-white text-xs"
              href={`mailto:${contactInfo.email}`}
            >
              {contactInfo.email}
            </a>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col mb-10">
          <h3 className="font-main mb-4 text-white text-lg">Company</h3>
          <Link
            className=" font-secondary text-sm mb-2 font-light leading-1  text-white focus:bg-gray-100 hover:no-underline"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" font-secondary text-sm mb-2 font-light leading-1  text-white focus:bg-gray-100 hover:no-underline"
            href="/about"
          >
            About
          </Link>
          <Link
            className=" font-secondary text-sm mb-2 font-light leading-1  text-white focus:bg-gray-100 hover:no-underline"
            href="/dougs-blog"
          >
            Dougs Blog
          </Link>
          <Link
            className=" font-secondary text-sm mb-2 font-light leading-1  text-white focus:bg-gray-100 hover:no-underline"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex flex-col mb-10">
          <label
            className="font-main mb-5 text-white text-lg"
            htmlFor="mailing-list"
          >
            Join our newsletter
          </label>

          <input
            type="text"
            placeholder="joeRandom@gmail.com"
            className="rounded-sm form-input w-full border-0"
          />
          <div className="mt-4">
            <Link
              to="/contact"
              className="px-2 mt-8 font-secondary py-1 text-black text-sm bg-white rounded-sm shadow-sm  sm:top-4  hover:no-underline"
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-5 flex flex-col  justify-center ">
        <span className="mr-6 text-sm text-white justify-center text-center sm:mr-0 sm:text-base">
          © {companyName}, {new Date().getFullYear()}.{' '}
        </span>
        <span className="flex text-white justify-center mt-4 text-xs italic sm:mt-0 ">
          Made with love by Jamie Gobeille
          <img
            className="w-6 ml-2"
            alt="A Laptop"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZGF0YS1uYW1lPSLQodC70L7QuSAxIiBpZD0i0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48cGF0aCBkPSJNMTI2LDk0SDExNS42N2E1Ljk0LDUuOTQsMCwwLDAsLjMzLTEuOTRWMjcuOTRBNiw2LDAsMCwwLDExMC4wNiwyMkgxNy45NEE2LDYsMCwwLDAsMTIsMjcuOTRWOTIuMDZBNS45NCw1Ljk0LDAsMCwwLDEyLjMzLDk0SDJhMiwyLDAsMCwwLTIsMnYuNUMwLDEwMSwzLjYzLDEwNiw4LjUsMTA2aDExMWM0Ljg3LDAsOC41LTUsOC41LTkuNVY5NkEyLDIsMCwwLDAsMTI2LDk0Wk0xNiw5Mi4wNlYyNy45NEExLjk0LDEuOTQsMCwwLDEsMTcuOTQsMjZoOTIuMTJBMS45NCwxLjk0LDAsMCwxLDExMiwyNy45NFY5Mi4wNkExLjk0LDEuOTQsMCwwLDEsMTEwLjA2LDk0SDE3Ljk0QTEuOTQsMS45NCwwLDAsMSwxNiw5Mi4wNlpNMTE5LjUsMTAySDguNWMtMS45NSwwLTMuNjctMi00LjI3LTRIMTIzLjc3QzEyMy4xNywxMDAuMDUsMTIxLjQ1LDEwMiwxMTkuNSwxMDJaIi8+PHBhdGggZD0iTTg0LDcwLjE1cy01LjI3LTIuNC01LjI3LTcuNjNhOC4yNCw4LjI0LDAsMCwxLDQtNi44NSwyLDIsMCwwLDAsLjczLTIuODZBMTUuMjIsMTUuMjIsMCwwLDAsODEsNTBjLTIuNC0yLTYuNi0yLjU5LTguNy0yLjU5YTE4LjMyLDE4LjMyLDAsMCwwLTUuODksMS41MywxOC43NSwxOC43NSwwLDAsMS0xLjkzLjY4Yy0uMjktLjA3LS45Mi0uMjktMS40NS0uNDdDNjAuNTMsNDguMjcsNTYuNzYsNDcsNTMuMjUsNDgsNDQuNDMsNTAuNjgsNDMsNTkuMjQsNDIuODMsNjIuOGMtLjMsNS42Myw0LjExLDE0LjkxLDUuNSwxN2wuMjkuNDRjMS41NSwyLjMxLDMuNjYsNS40Niw3LjczLDUuNzhsLjc0LDBBMTMuNDgsMTMuNDgsMCwwLDAsNjIsODQuOTFhOS4xLDkuMSwwLDAsMSwzLS43Niw5LjUxLDkuNTEsMCwwLDEsMy4xOS43N0ExNC4xMywxNC4xMywwLDAsMCw3My4wNyw4NmMzLjM5LDAsNS43Mi0yLjkxLDcuMjYtNC44My4zNC0uNDMuNjYtLjgzLjg3LTEsMS40OS0xLjQ5LDMuMzItNiwzLjg1LTcuNDFBMiwyLDAsMCwwLDg0LDcwLjE1Wm0tNS42MSw3LjEzYTE2LjYzLDE2LjYzLDAsMCwwLTEuMTcsMS4zN0M3Ni4xNSw4MCw3NC41NCw4Miw3My4wNyw4MmExMC4xNCwxMC4xNCwwLDAsMS0zLjU1LS44MywxMywxMywwLDAsMC00LjU0LTEsMTIuNywxMi43LDAsMCwwLTQuNDEsMSw5LDksMCwwLDEtMy45MS44MmMtMi0uMTUtMy4xNi0xLjY5LTQuNzEtNGwtLjMxLS40NmMtMS4zMy0yLTUtMTAuMzQtNC44MS0xNC40OUM0Nyw2MC4zLDQ4LDUzLjc4LDU0LjQxLDUxLjg1YTUuNTEsNS41MSwwLDAsMSwxLjY0LS4yMywxOC4yMiwxOC4yMiwwLDAsMSw1LjY1LDEuMyw5LDksMCwwLDAsMi43Ni43MSwxMC42MSwxMC42MSwwLDAsMCwzLjM3LTEsMTYuMTEsMTYuMTEsMCwwLDEsNC40Ni0xLjI3YzIsMCw0LjkuNjEsNi4xLDEuNjQuMTkuMTYuMzcuMzMuNTQuNWExMS43OSwxMS43OSwwLDAsMC00LjIxLDljMCw1LjUzLDMuNyw4LjgzLDYsMTAuMzJBMjEuNzQsMjEuNzQsMCwwLDEsNzguMzgsNzcuMjhaIi8+PHBhdGggZD0iTTY0LjA5LDQ2LjY1cy4yMywwLC41NCwwYTkuNyw5LjcsMCwwLDAsNy43NC00LjE0LDExLjQ1LDExLjQ1LDAsMCwwLDIuNDktNy43NiwyLDIsMCwwLDAtLjc1LTEuMzRBMiwyLDAsMCwwLDcyLjYzLDMzYTEzLjgyLDEzLjgyLDAsMCwwLTcuMzIsMy41NmMtMy4xMywzLjEzLTMsOC0zLDguMTZBMiwyLDAsMCwwLDY0LjA5LDQ2LjY1Wm00LTcuMjVhOC4wOCw4LjA4LDAsMCwxLDIuMjktMS41Nyw5LjUyLDkuNTIsMCwwLDEtMS4yNiwyLjMsNi41MSw2LjUxLDAsMCwxLTIuNTQsMi4wOUE2LjE5LDYuMTksMCwwLDEsNjguMTQsMzkuNFoiLz48L3N2Zz4="
          ></img>
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  companyName: PropTypes.string,
};

Footer.defaultProps = {
  companyName: ``,
};

export default Footer;
