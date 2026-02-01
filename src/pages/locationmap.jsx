// src/components/LocationMap.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const LocationMap = () => {
  const officeLocation = {
    name: 'Gratial Legalities',
    address: '1, Ondo Street, Area 1',
    city: 'Garki, Abuja',
    country: 'Nigeria',
    phone: '(234) 813 893 9107',
    email: 'gratialegals@gmail.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
    description: 'Legal expertise you can trust',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9346!2d7.4897!3d9.0354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDInMDcuNCJOIDfCsDI5JzIyLjkiRQ!5e0!3m2!1sen!2sng!4v1234567890'
  };

  return (
    <>
      <Helmet>
        <title>Find Us | Gratial Legalities</title>
        <meta name="description" content="Visit Gratial Legalities at our office in Garki, Abuja. Get directions and contact information." />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#e67e22] to-[#e74c3c] text-white">
          <div className="container mx-auto px-6 py-16 md:py-20">
            <div className="max-w-6xl mx-auto">
              <nav className="mb-8">
                <Link 
                  to="/" 
                  className="text-neutral-200 hover:text-white transition-colors duration-200 inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Home
                </Link>
              </nav>
              
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                  Visit Our Office
                </h1>
                <p className="text-xl text-neutral-100 max-w-3xl mx-auto">
                  Located in the heart of Abuja, we're here to serve you with expert legal counsel
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content - Map First */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Map Section - Primary Focus */}
            <div className="bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden mb-8">
              <div className="aspect-w-16 aspect-h-9 bg-neutral-100">
                {/* Google Maps Embed */}
                <iframe
                  src={officeLocation.mapUrl}
                  width="100%"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Gratial Legalities Office Location"
                ></iframe>
              </div>
              
              {/* Quick Actions Bar */}
              <div className="bg-neutral-50 border-t border-neutral-200 p-4">
                <div className="flex flex-wrap gap-3 justify-center">
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${officeLocation.address}, ${officeLocation.city}, ${officeLocation.country}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#e67e22] hover:bg-[#d35400] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Open in Google Maps
                  </a>
                  <a 
                    href={`tel:${officeLocation.phone}`}
                    className="inline-flex items-center bg-white hover:bg-neutral-50 border-2 border-[#e67e22] text-[#e67e22] px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Call Us
                  </a>
                  <Link 
                    to="/contact"
                    className="inline-flex items-center bg-white hover:bg-neutral-50 border-2 border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Send Message
                  </Link>
                </div>
              </div>
            </div>

            {/* Office Information Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Address Card */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <div className="flex items-start">
                  <div className="bg-[#e67e22] bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#e67e22]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Address</h3>
                    <p className="text-neutral-700">{officeLocation.address}</p>
                    <p className="text-neutral-700">{officeLocation.city}</p>
                    <p className="text-neutral-700">{officeLocation.country}</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <div className="flex items-start">
                  <div className="bg-[#e67e22] bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#e67e22]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Contact</h3>
                    <p className="text-neutral-700 mb-1">
                      <a href={`tel:${officeLocation.phone}`} className="hover:text-[#e67e22] transition-colors">
                        {officeLocation.phone}
                      </a>
                    </p>
                    <p className="text-neutral-700">
                      <a href={`mailto:${officeLocation.email}`} className="hover:text-[#e67e22] transition-colors">
                        {officeLocation.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
                <div className="flex items-start">
                  <div className="bg-[#e67e22] bg-opacity-10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-[#e67e22]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Office Hours</h3>
                    <p className="text-neutral-700">{officeLocation.hours}</p>
                    <p className="text-sm text-neutral-500 mt-2">Saturday & Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Visit Us Section */}
            <div className="bg-gradient-to-r from-[#e67e22] to-[#e74c3c] rounded-xl shadow-lg p-8 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-heading font-bold mb-6">
                  Schedule Your Consultation Today
                </h2>
                <p className="text-lg text-white mb-8 opacity-90">
                  Our experienced legal team is ready to assist you with personalized solutions for your legal needs. Visit us in person or schedule a virtual consultation.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white bg-opacity-10 backdrop-blur text-black rounded-lg p-6">
                    <div className="bg-[#e67e22] bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-sm opacity-90">Seasoned legal professionals</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 backdrop-blur text-black rounded-lg p-6">
                    <div className="bg-[#e67e22] bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Personalized Service</h3>
                    <p className="text-sm opacity-90">Tailored legal solutions</p>
                  </div>
                  
                  <div className="bg-white bg-opacity-10 backdrop-blur text-black rounded-lg p-6">
                    <div className="bg-[#e67e22] bg-opacity-20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold mb-2">Proven Results</h3>
                    <p className="text-sm opacity-90">Track record of success</p>
                  </div>
                </div>

                <Link 
                  to="/contact"
                  className="inline-block bg-white text-[#e67e22] px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-colors duration-200 shadow-lg"
                >
                  Book Your Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LocationMap;