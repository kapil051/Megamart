// src/components/Navbar.jsx
import React from 'react';

export function Navbar() {
    return (
        <div className="bg-white shadow-lg flex justify-between items-center h-16 px-4">
            <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                alt="Flipkart Logo"
                className="h-8"
            />
            <div className="relative flex items-center w-96">
                <img
                    className="absolute left-3 h-5 w-5 text-gray-500"
                    src="../src/assets/images/lens.svg"
                    alt="Search Icon"
                />
                <input
                    className="p-2 pl-10 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Search for Products, Brands and More"
                />
            </div>
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                    <img src="../src/assets/images/profile.svg" alt="Profile" className="h-6 w-6" />
                    <div className="text-gray-700 font-semibold hover:text-gray-900 transition duration-300 cursor-pointer">
                        Login
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="../src/assets/images/cart.svg" alt="Cart" className="h-6 w-6" />
                    <div className="text-gray-700 font-semibold hover:text-gray-900 transition duration-300 cursor-pointer">
                        Cart
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <img src="../src/assets/images/seller.svg" alt="Cart" className="h-6 w-6" />
                    <div className="text-gray-700 font-semibold hover:text-gray-900 transition duration-300 cursor-pointer">
                        Become a seller
                    </div>
                </div>
            </div>
        </div>
    );
}
