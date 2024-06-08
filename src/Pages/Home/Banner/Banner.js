import React from 'react';

const Banner = () => {
    return (
        <div className="hero" style={{backgroundImage: 'url(https://rb.gy/p5kek8)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Upgrade Your Lifestyle for Less. Shop your desired smartphone from our huge Second-Hand smartphones collection.</p>
      <button className="btn btn-primary text-white">Browse Products</button>
    </div>
  </div>
</div>
    );
};

export default Banner;