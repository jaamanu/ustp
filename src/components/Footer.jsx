import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="flex items-center mb-10 ">
              <img src="../../src/assets/logoo.png" alt="Logo" className="w-15 h-20 mr-4" />
            </div>
            <div>
                <p className="font-semibold">USTP </p>
                <p className="text-gray-300">267 Main CHICAGO AVENUE, CAPE TOWN, SOUTH AFRICA</p>
                <p className="text-gray-300">Phone: +27 72166254</p>
              </div>
          </div>
          <div className="col-span-1">
            <ul className="text-gray-300">
              <li className="mb-2"><a href="/">Home</a></li>
              <li className="mb-2"><a href="/main">Main</a></li>
              <li className="mb-2"><a href="/about">About</a></li>
              <li className="mb-2"><a href="/testimonial">Testimonial</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <ul className="text-gray-300">
              <li className="mb-2"><a href="https://ustpteachers@gmail.com" target='blank'>Email</a></li>
              <li className="mb-2"><a href="https://forms.gle/dxvQLLiGMD3QUVfR7" target='blank'>Registor Now</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <p className="text-gray-300">&copy; USTP 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
