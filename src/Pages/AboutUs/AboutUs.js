import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://shorturl.at/eCQkP"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mujib</h1>
            <p className="py-2">Admin and CEO Resale Repo LLC.</p>
            <Link to="https://www.facebook.com/iamsheikhshaon/" target="_blank">
              <button className="btn btn-primary">Visit FB Profile</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://shorturl.at/eCQkP"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mujib</h1>
            <p className="py-2">Admin and CEO Resale Repo LLC.</p>
            <Link to="https://www.facebook.com/iamsheikhshaon/" target="_blank">
              <button className="btn btn-primary">Visit FB Profile</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src="https://shorturl.at/eCQkP"
                alt=""
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Mujib</h1>
            <p className="py-2">Admin and CEO Resale Repo LLC.</p>
            <Link to="https://www.facebook.com/iamsheikhshaon/" target="_blank">
              <button className="btn btn-primary">Visit FB Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
