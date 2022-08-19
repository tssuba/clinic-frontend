import React from 'react';

import config from '../config/index.json';

const Pricing = () => {
  const { pricing } = config;
    const { title } = pricing;
  // const { items, title } = pricing;
  // const [firstPlan, secondPlan, thirdPlan] = items;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
{/*        <div
          className={`flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-background mt-4 sm:-mt-6 shadow-lg z-10`}
          >
            <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {secondPlan?.name}
              </div>
              <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div>
              <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div className={`w-full pt-6 text-4xl font-bold text-center`}>
                {secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div>
        </div>*/}
        <div>
        <iframe 
          className={`container mx-auto px-2 pt-4 pb-12 text-primary`}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.6935401946953!2d90.26877303488767!3d26.40108679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37586039891768e7%3A0x9066a9240eb6c4a4!2sBright%20Smile%20Dental%20Clinic%20%2C%20Ward%20No%2006%20Kokrajhar!5e0!3m2!1sen!2sin!4v1660928150417!5m2!1sen!2sin" 
          height="600" 
          // style="border:0;"
          // allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        
        </iframe>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
