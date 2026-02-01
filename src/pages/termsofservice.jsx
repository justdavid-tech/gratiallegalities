// src/components/TermsOfService.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/footer';

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>Terms of Service | [Your Law Firm Name]</title>
        <meta name="description" content="Terms governing your use of our legal services and website. Please read these terms carefully before using our services." />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-[#e67e22] to-[#e74c3c] text-white">
          <div className="container mx-auto px-6 py-28 md:py-27 lg:py-32">
            <div className="max-w-5xl mx-auto">
              <nav className="mb-8">
                <a 
                  href="/" 
                  className="text-neutral-200 hover:text-white transition-colors duration-200 inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Home
                </a>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-neutral-200 max-w-4xl">
                These terms govern your use of Gratial Legalities's services and website. By accessing our services, you agree to these terms.
              </p>
            </div>
          </div>
        </header>

        {/* Important Notice Banner */}
        <div className="bg-black text-white">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.896-.833-2.666 0L4.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold">Important Legal Notice</h3>
                  <p className="text-primary-100 text-sm">These terms contain important information about your rights and obligations</p>
                </div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-sm">
                  <span className="font-semibold">Effective Date:</span> {currentDate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            {/* Quick Navigation */}
            <div className="sticky top-4 z-10 mb-12 bg-white rounded-xl shadow-lg border border-neutral-200 p-6">
              <h2 className="text-xl font-heading font-semibold text-neutral-900 mb-4">
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                  { id: 'agreement', label: 'Agreement' },
                  { id: 'services', label: 'Services' },
                  { id: 'user-obligations', label: 'Your Obligations' },
                  { id: 'fees', label: 'Fees & Payments' },
                  { id: 'confidentiality', label: 'Confidentiality' },
                  { id: 'liability', label: 'Liability' },
                  { id: 'termination', label: 'Termination' },
                  { id: 'governing-law', label: 'Governing Law' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="bg-neutral-50 hover:bg-primary-50 text-neutral-700 hover:text-primary-700 border border-neutral-200 hover:border-primary-300 rounded-lg px-3 py-2 text-sm text-center transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-12">
              {/* Section 1: Agreement */}
              <section id="agreement" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Agreement to Terms
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <p>
                    These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and <span className="font-semibold text-primary-600">Gratial Legalities</span> ("we," "us," or "our"), concerning your access to and use of our legal services and website.
                  </p>
                  
                  <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                    <div className="flex">
                      <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-primary-800 mb-2">By accessing our services, you confirm that:</h4>
                        <ul className="space-y-2 mt-2">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                            <span>You have read, understood, and agree to be bound by these Terms</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                            <span>You are at least 18 years old or have legal capacity to enter into contracts</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3"></div>
                            <span>You will comply with all applicable laws and regulations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <p>
                    If you do not agree with all of these Terms, then you are expressly prohibited from using our services and must discontinue use immediately.
                  </p>
                </div>
              </section>

              {/* Section 2: Legal Services */}
              <section id="services" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Legal Services Description
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <p>
                    We provide legal services in the following practice areas:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { area: "Commercial Law"},
                      { area: "Commercial Advisory"},
                      { area: "Commercial Documentation"},
                      { area: "Contract Drafting"},
                      { area: "Corporate Law"},
                      { area: "Employment"},
                      { area: "Legal Advisory"},
                      { area: "Legal Due Diligence"},
                      { area: "Online Business"},
                      { area: "Property Dispute"},
                      { area: "Real Estate"}
                    ].map((practice, index) => (
                      <div key={index} className="bg-neutral-50 rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center">
                          <span className="text-2xl mr-4">{practice.icon}</span>
                          <span className="font-semibold text-neutral-900">{practice.area}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-warning-50 border border-warning-200 rounded-lg p-6">
                    <div className="flex">
                      <svg className="w-6 h-6 text-warning-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-warning-800 mb-2">Important Disclaimer</h4>
                        <p className="text-warning-700">
                          The information on our website is for general informational purposes only and does not constitute legal advice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: User Obligations */}
              <section id="user-obligations" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Your Obligations
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <p>As a user of our services, you agree to:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                      <div className="bg-success-100 p-2 rounded mr-4">
                        <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Prohibited Activities</h4>
                        <p className="text-sm text-neutral-600">Do not engage in fraudulent activities, misrepresentation, or unauthorized use of our services.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                      <div className="bg-success-100 p-2 rounded mr-4">
                        <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Truthful Information</h4>
                        <p className="text-sm text-neutral-600">Provide accurate, complete, and current information in all communications.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start p-4 bg-neutral-50 rounded-lg">
                      <div className="bg-success-100 p-2 rounded mr-4">
                        <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-1">Security</h4>
                        <p className="text-sm text-neutral-600">Maintain the confidentiality of your account credentials and immediately notify us of any unauthorized access.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4: Fees & Payments */}
              <section id="fees" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Fees & Payments
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-[#e67e22] rounded-lg p-6 text-center">
                      <h4 className="font-semibold text-[#e67e22] mb-2">Engagement Agreement</h4>
                      <p className="text-sm text-neutral-600">All fees are detailed in a signed engagement agreement before services begin.</p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-6 text-center">
                      <h4 className="font-semibold text-neutral-900 mb-2">Payment Terms</h4>
                      <p className="text-sm text-neutral-600">Payment terms vary by engagement type (hourly, flat fee, retainer).</p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-6 text-center">
                      <h4 className="font-semibold text-neutral-900 mb-2">Expenses</h4>
                      <p className="text-sm text-neutral-600">Additional expenses (filing fees, travel, etc.) are billed separately.</p>
                    </div>
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-6 mt-6">
                    <h4 className="font-semibold text-primary-800 mb-3">Billing Disputes</h4>
                    <p className="text-primary-700">
                      If you dispute any charge, you must notify us in writing within 30 days of the invoice date. Failure to dispute within this period constitutes waiver of any objection.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 5: Confidentiality */}
              <section id="confidentiality" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">5</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Confidentiality
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-secondary-800 text-white rounded-full p-8">
                      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-heading font-semibold text-primary-600 mb-3">
                      Client Privilege
                    </h3>
                    <p className="text-neutral-700">
                      Communications between you and our attorneys are protected by attorney-client privilege to the fullest extent permitted by law.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-neutral-50 p-5 rounded-lg">
                      <h4 className="font-semibold text-neutral-900 mb-2">Our Commitment</h4>
                      <p className="text-sm text-neutral-600">We maintain strict confidentiality of all client information as required by professional rules of conduct.</p>
                    </div>
                    
                    <div className="bg-neutral-50 p-5 rounded-lg">
                      <h4 className="font-semibold text-neutral-900 mb-2">Exceptions</h4>
                      <p className="text-sm text-neutral-600">Confidentiality may be waived with your consent or as required by law.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6: Limitation of Liability */}
              <section id="liability" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">6</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Limitation of Liability
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <div className="bg-error-50 border border-error-200 rounded-lg p-6">
                    <h4 className="font-semibold text-error-800 mb-3">Disclaimer of Warranties</h4>
                    <p className="text-error-700">
                      Our services are provided "as is" and "as available" without warranties of any kind. We do not guarantee specific outcomes from legal representation.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-neutral-900">To the maximum extent permitted by law:</h4>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start">
                        <div className="bg-error-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                        </div>
                        <span>We shall not be liable for any indirect, incidental, or consequential damages</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-error-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                        </div>
                        <span>Our total liability shall not exceed the fees paid for the specific service giving rise to the claim</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-error-100 rounded-full p-1 mr-3 mt-1">
                          <div className="w-2 h-2 bg-error-500 rounded-full"></div>
                        </div>
                        <span>We are not responsible for third-party actions or content</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Termination */}
              <section id="termination" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">7</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Termination
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary-600">By You</h3>
                    <p className="text-neutral-700">
                      You may terminate our representation at any time by providing written notice. You remain responsible for fees incurred up to termination.
                    </p>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600">
                        <strong>Note:</strong> Court permission may be required if litigation is pending.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary-600">By Us</h3>
                    <p className="text-neutral-700">
                      We may terminate representation for non-payment, conflicts of interest, or other valid reasons under professional rules.
                    </p>
                    <div className="bg-neutral-50 p-4 rounded-lg">
                      <p className="text-sm text-neutral-600">
                        <strong>Notice:</strong> We will provide reasonable notice and assist with transition where possible.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 8: Governing Law */}
              <section id="governing-law" className="scroll-mt-28 bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e67e22] text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">8</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Governing Law & Jurisdiction
                    </h2>
                    <div className="w-20 h-1 bg-[#e67e22]"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-neutral-700">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <h4 className="font-semibold text-neutral-900 mb-2">Governing Law</h4>
                      <p className="text-neutral-600">These Terms shall be governed by and construed in accordance with the laws of Nigeria.</p>
                    </div>
                    
                    <div className="border border-neutral-200 rounded-lg p-5">
                      <h4 className="font-semibold text-neutral-900 mb-2">Jurisdiction</h4>
                      <p className="text-neutral-600">Any legal action shall be brought in the courts located in Abuja, Nigeria.</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#e67e22] border border-info-200 rounded-lg p-6">
                    <h4 className="font-semibold text-white mb-2">Choice of Law</h4>
                    <p className="text-white">
                      This choice of law provision applies regardless of your location or where you access our services.
                    </p>
                  </div>
                </div>
              </section>


              {/* Section 9: Contact */}
              <section id="contact" className="scroll-mt-28 bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-sm border border-primary-200 p-8">
                <div className="flex items-start mb-8">
                  <div className="bg-primary-600 text-white rounded-lg w-12 h-12 flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold">9</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900 mb-3">
                      Contact Information
                    </h2>
                    <div className="w-20 h-1 bg-primary-500"></div>
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <p className="text-xl text-neutral-700 mb-6">
                    For questions about these Terms or to provide legal notice, please contact:
                  </p>
                  
                  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        <span className="text-lg font-semibold">Gratia Legalities</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <span>1, Ondo Street, Area 1, Garki, Abuja</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z" clipRule="evenodd" />
                        </svg>
                        <span>gratialegals@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span>(234) 813 893 9107</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-primary-200 pt-8">
                  <p className="text-center text-neutral-600">
                    <strong>Legal Notices:</strong> All legal notices must be in writing and sent to the address above via certified mail.
                  </p>
                </div>
              </section>
            </div>

            {/* Acceptance Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-secondary-50 to-neutral-50 rounded-xl border border-neutral-200">
              <div className="text-center">
                <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                  Acceptance of Terms
                </h3>
                <p className="text-neutral-700 mb-6 max-w-2xl mx-auto">
                  By using our website or engaging our legal services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Back to Top
                  </button>
                  <a 
                    href="/contact"
                    className="bg-white hover:bg-neutral-50 text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Contact Us with Questions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfService;