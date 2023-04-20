import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="pt-32">
      <div className="container w-3/5 mx-auto flex flex-col items-center">
        <h1 className="heading">Home Page</h1>
        <p className="description">
          Something short and leading about the collection below - its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely
        </p>

        <div className="flex [&>*:not(:last-child)]:mr-4">
          <NavLink to="/pricing" className="btn">
            Pricing
          </NavLink>
          <NavLink
            to="/pricing"
            className="rounded px-3 py-2 border border-indigo-800 text-indigo-800 hover:border-indigo-900 hover:text-indigo-900"
          >
            Pricing
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Landing;
