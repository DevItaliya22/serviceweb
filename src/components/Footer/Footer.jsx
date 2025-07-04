import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Logo from "../../assets/Logo.svg";
import { getContactDetails } from '../../api/contact';
import Loader from '../../Spinner/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIcon } from '../../store/iconSlice';

export default function IteckFooter() {
  const [contactDetails, setContactDetails] = useState({
    email: 'info@iteck-info.com',
    phone: '907 000 999 22',
    address: '12/A, New Booston, NYC'
  });
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const iconData = useSelector((state) => state.icon.data);
  const iconStatus = useSelector((state) => state.icon.status);

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        setLoading(true);
        const details = await getContactDetails();
        setContactDetails({
          email: details.email || 'info@iteck-info.com',
          phone: details.phone || '907 000 999 22',
          address: details.address || '12/A, New Booston, NYC'
        });
      } catch (error) {
        console.error('Error fetching contact details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, []);

  useEffect(() => {
    if (iconStatus === 'idle') {
      dispatch(fetchIcon());
    }
  }, [dispatch, iconStatus]);

  let logoUrl = Logo;
  if (Array.isArray(iconData)) {
    const logoObj = iconData.find(item => item.type === 'logo');
    if (logoObj && logoObj.icon) {
      const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';
      logoUrl = `${baseUrl}/${logoObj.icon.replace(/\\/g, '/')}`;
    }
  }
  console.log('logoUrl:', logoUrl);

  console.log('iconData:', iconData);
  const socialIcons = Array.isArray(iconData) ? iconData.filter(item => item.type === 'social') : [];
  console.log('Filtered social icons:', socialIcons);

  if (loading) {
    return <Loader />;
  }

  return (
    <footer className="bg-gray-50 py-16">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 pb-8 border-b border-gray-200">
          {/* Logo Section */}
          <div className="flex items-center mb-6 sm:mb-0">
            <Link to="/" className="flex items-center ml-3">
              <img
                src={logoUrl}
                alt="Company Logo"
                className="h-20 w-40 lg:w-60 lg:object-cover sm:object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {socialIcons.length > 0 ? (
              socialIcons.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.url || '#'}
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow mr-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={`${import.meta.env.VITE_BASE_URL || 'http://localhost:5000'}/${item.icon.replace(/\\/g, '/')}`} alt={item.name || 'Social'} className="w-5 h-5 object-contain" />
                  </a>
                );
              })
            ) : (
              <span className="text-red-500 text-sm">No social icons found in Redux data.</span>
            )}
          </div>
        </div>

        {/* Main Content Grid - Center Aligned with Uniform Gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* About Us Section */}
          <div className="space-y-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900">About Us</h4>
            <p className="text-gray-600 leading-relaxed">
              Our highly skilled development teams specialized in data analysis.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{contactDetails.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{contactDetails.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{contactDetails.address}</span>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="space-y-6 text-center">
            <h4 className="text-xl font-semibold text-gray-900">What We Do</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Online Marketing
                </a>
              </li>
              <li>
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
          <div className="space-y-6 text-center">
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