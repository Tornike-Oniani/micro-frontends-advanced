import React from 'react';
import { NavLink } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="pt-32">
      <div className="container w-3/5 mx-auto flex flex-col items-center">
        <h1 className="heading">This is a pricing page</h1>
        <p className="description">
          Quickly build an effective pricing table for your potential customers
          with this layout. It's build with Tailwind CSS.
        </p>
        <div className="flex">
          <div className="border rounded border-gray-400 shadow-md w-96 mr-10 flex flex-col">
            <h4 className="bg-gray-100 py-3 text-3xl text-center">Free</h4>
            <div className="text-center">
              <span className="text-3xl text-gray-400 block py-5 mb-3">
                <strong className="text-5xl text-black font-normal">$0</strong>
                /mo
              </span>
              <ul className="text-2xl [&>*]:mb-2">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Help center access</li>
                <li>Email support</li>
              </ul>
            </div>

            <NavLink
              to="/auth/signup"
              className="text-cyan-600 hover:text-cyan-700 hover:bg-gray-50 text-center block p-5 text-2xl uppercase"
            >
              Sign up for free
            </NavLink>
          </div>
          <div className="border rounded border-gray-400 shadow-md w-96">
            <h4 className="bg-gray-100 py-3 text-3xl text-center">
              <span className="block">Pro</span>
              <span className="text-2xl text-gray-500">Most popular</span>
            </h4>
            <div className="text-center">
              <span className="text-3xl text-gray-400 block py-5 mb-3">
                <strong className="text-5xl text-black font-normal">$15</strong>
                /mo
              </span>
              <ul className="text-2xl [&>*]:mb-2">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Help center access</li>
                <li>Priority email support</li>
              </ul>
            </div>

            <NavLink
              to="/auth/signup"
              className="text-cyan-600 hover:text-cyan-700 hover:bg-gray-50 text-center block p-5 text-2xl uppercase"
            >
              Get started
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
