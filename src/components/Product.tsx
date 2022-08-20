import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-4`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`mx-auto sm:w-1/2 p-6`}>
          <img
            className="h-6/6"
            src={secondItem?.img}
            alt={secondItem?.title}
          />
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6 mt-10`}>
            <div className={`align-middle`}>
              <div className="rounded-md shadow">
                <a
                  href={firstItem?.link}
                  target="_blank"
                  className={`w-full flex items-center justify-center mb-8 px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                >
                  Schedule {firstItem?.name}
                </a>
              </div>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {firstItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{firstItem?.description}</p>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-10`}>
            <div className={`align-middle`}>
            <div className="rounded-md shadow">
                <a
                  href={secondItem?.link}
                   target="_blank"
                  className={`w-full flex items-center justify-center px-8 py-3 mb-8 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                >
                  Schedule {secondItem?.name}
                </a>
              </div>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
