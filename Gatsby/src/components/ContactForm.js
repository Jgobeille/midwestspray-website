import React from 'react';

import { Link } from 'gatsby';

const ContactForm = ({
  containerStyles,
  formStyles,
  formContainerStyles,
  animation,
  duration,
  delay,
  easing,
}) => (
  <div
    data-sal={animation}
    data-sal-duration={duration}
    data-sal-delay={delay}
    data-sal-easing={easing}
    className={containerStyles}
  >
    <div className={formContainerStyles}>
      <form className={formStyles} action="POST">
        <div>
          <label htmlFor="first name">First Name</label>
          <br />
          <input
            type="text"
            placeholder="Hugh"
            className="rounded-sm form-input mt-1 mb-4 w-full border-0"
          />
        </div>
        <div>
          <label htmlFor="last name">Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Jazz"
            className="rounded-sm form-input mt-1 mb-4 w-full border-0"
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <br />
          <input
            type="email"
            placeholder="hughJazz@gmail.com"
            className="rounded-sm form-input mt-1 mb-4 w-full border-0"
          />
        </div>
        <div>
          <label htmlFor="company name">Company Name</label>
          <br />
          <input
            type="text"
            placeholder="Hugh's Jazz Company"
            className="rounded-sm form-input mt-1 mb-4 w-full border-0"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="how can we help?">How can we help?</label>
          <br />
          <select className="rounded-sm form-input mt-1 mb-4 w-full border-0 ">
            <option value="Need a quote">I need a quote</option>
            <option value="General Inquiry">I have a general inquiry</option>
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
);

export default ContactForm;
