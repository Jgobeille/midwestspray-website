import React, { useState } from 'react';

import { Link } from 'gatsby';

import useForm from '../utils/useForm';

const ContactForm = ({
  containerStyles,
  formStyles,
  formContainerStyles,
  animation,
  duration,
  delay,
  easing,
}) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { values, updateValue } = useForm({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    howCanWeHelp: '',
    message: '',
  });

  const submitOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    // Gather all the data
    const body = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      companyName: values.companyName,
      howCanWeHelp: values.howCanWeHelp,
      message: values.message,
    };

    console.log(body);

    // 4. send this data the serverless when they check out
    const res = await fetch(`/api/contactRequest`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    console.log(res);

    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(text.message);
    } else {
      setLoading(false);
      setMessage(text.message);
    }
  };

  return (
    <div
      data-sal={animation}
      data-sal-duration={duration}
      data-sal-delay={delay}
      data-sal-easing={easing}
      className={containerStyles}
    >
      <div className={formContainerStyles}>
        <form
          className={formStyles}
          onSubmit={submitOrder}
          method="POST"
          action="/api/contactRequest"
        >
          <div>
            <label htmlFor="first name">First Name *Required</label>
            <br />
            <input
              name="firstName"
              type="text"
              placeholder="Hugh"
              className="rounded-sm form-input mt-1 mb-4 w-full border-0"
              value={values.firstName}
              onChange={updateValue}
            />
          </div>
          <div>
            <label htmlFor="last name">Last Name *Required</label>
            <br />
            <input
              name="lastName"
              type="text"
              placeholder="Jazz"
              className="rounded-sm form-input mt-1 mb-4 w-full border-0"
              value={values.lastName}
              onChange={updateValue}
            />
          </div>
          <div>
            <label htmlFor="email">Email *Required</label>
            <br />
            <input
              name="email"
              type="email"
              placeholder="hughJazz@gmail.com"
              className="rounded-sm form-input mt-1 mb-4 w-full border-0"
              value={values.email}
              onChange={updateValue}
            />
          </div>
          <div>
            <label htmlFor="company name">Company Name</label>
            <br />
            <input
              name="companyName"
              type="text"
              placeholder="Hugh's Jazz Company"
              className="rounded-sm form-input mt-1 mb-4 w-full border-0"
              value={values.companyName}
              onChange={updateValue}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="how can we help?">How can we help?</label>
            <br />
            <select
              name="howCanWeHelp"
              value={values.howCanWeHelp}
              onChange={updateValue}
              className="rounded-sm form-input mt-1 mb-4 w-full border-0 "
            >
              <option value="Need a quote">I need a quote</option>
              <option value="General Inquiry">I have a general inquiry</option>
              <option value="Service call">Service call</option>
            </select>
          </div>
          <div className="col-span-2">
            <label htmlFor="message">Message *Required</label>
            <br />
            <textarea
              name="message"
              rows="5"
              className="rounded-sm w-full h-full border-0"
              value={values.message}
              onChange={updateValue}
            ></textarea>
          </div>
          <div className="mt-10 col-span-2">
            <div className="font-secondary text-red-600">
              {error ? <p>Error: {error}</p> : ''}
            </div>
            <div className="font-main text-lg text-ghost-white">
              {message ? <p>{message} </p> : ''}
            </div>
            <button
              type="submit"
              className="px-4 font-secondary py-2 text-black bg-white rounded-sm shadow-sm  sm:top-4  hover:no-underline"
            >
              {loading ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
