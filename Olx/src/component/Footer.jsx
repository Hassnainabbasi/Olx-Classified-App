import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 ml-5">About Us</h2>
          <p className="text-sm ml-5">
            We are a Leading Olx Platform Providing Top Quality Products
            at Unbeatable Prices. Our mission is to Deliver an Exceptional Shopping Experience.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 ml-5">Quick Links</h2>
          <ul >
            <li className="mb-2"><a href="#" className="hover:text-gray-300 ml-5">Home</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300 ml-5">Shop</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300 ml-5">About</a></li>
            <li className="mb-2"><a href="#" className="hover:text-gray-300 ml-5">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 ml-5">Contact Us</h2>
          <ul>
            <li className="mb-2 ml-5">Email: olx@gmail..com</li>
            <li className="mb-2 ml-5">Phone: +9192 123 141</li>
            <li className="mb-2 ml-5">Address: 123 Olx St, Shop City</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 ml-5">Follow Us</h2>
          <div className="flex space-x-4 ml-5">
            <a href="#" className="hover:text-gray-300">Facebook</a>
            <a href="#" className="hover:text-gray-300">Twitter</a>
            <a href="#" className="hover:text-gray-300">Instagram</a>
            <a href="#" className="hover:text-gray-300">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 E-commerce Website. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
