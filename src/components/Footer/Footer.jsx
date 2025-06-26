import React, {} from 'react';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../../assets/Logo.jpg"

export default function IteckFooter() {

  return (
    <footer className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 pb-8 border-b border-gray-200">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 mb-6 sm:mb-0">
            <div className="flex">
              <img
                src={Logo}
                alt="Company Logo"
                className="w-30 h-20 object-contain rounded-lg"
              />
            </div>
            {/* <div>
              <h1 className="text-2xl font-bold text-gray-900"> Technitium </h1>
              <p className="text-sm text-gray-600 -mt-1">Experience The Excellence</p>
            </div> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Facebook className="w-5 h-5 text-blue-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Twitter className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Youtube className="w-5 h-5 text-red-600" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="w-5 h-5 text-blue-700" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900">About Us</h4>
            <p className="text-gray-600 leading-relaxed">
              Our highly skilled development teams specialized in data analysis.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">info@iteck-info.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">907 000 999 22</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">12/A, New Booston, NYC</span>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900">What We Do</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Online Marketing
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Content strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Advertising Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Other Pages Section */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-900">Other Pages</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Iteck
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-600">
              Full Copyright & Design By{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
                @ThemesCamp
              </a>{' '}
              - 2023
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}