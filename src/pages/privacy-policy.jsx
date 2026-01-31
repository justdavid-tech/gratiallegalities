import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Gratial Legalities</title>
        <meta name="description" content="Our commitment to protecting your privacy and handling your personal information with care and confidentiality." />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
          <div className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <nav className="mb-8">
                <a 
                  href="/" 
                  className="text-primary-100 hover:text-white transition-colors duration-200 inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Home
                </a>
              </nav>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Privacy Policy
              </h1>
              <p className="text-xl text-primary-100 max-w-3xl">
                Our commitment to protecting your privacy and handling your personal information with the utmost care and confidentiality.
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Last Updated */}
            <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-neutral-600">
                    <span className="font-semibold text-neutral-900">Last Updated:</span> {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    This policy may be updated periodically. Please check this page for the latest version.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-sm border border-primary-100 p-6 mb-12">
              <h2 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                Table of Contents
              </h2>
              <nav className="space-y-2">
                {[
                  { id: 'information-collection', title: '1. Information We Collect' },
                  { id: 'information-use', title: '2. How We Use Your Information' },
                  { id: 'information-sharing', title: '3. Information Sharing & Disclosure' },
                  { id: 'data-security', title: '4. Data Security' },
                  { id: 'your-rights', title: '5. Your Rights & Choices' },
                  { id: 'children', title: '7. Children\'s Privacy' },
                  { id: 'international', title: '8. International Data Transfers' },
                  { id: 'policy-changes', title: '9. Changes to This Policy' },
                  { id: 'contact', title: '10. Contact Us' }
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-primary-600 hover:text-primary-800 transition-colors duration-200 py-1 border-l-2 border-primary-200 pl-4 hover:border-primary-500"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Policy Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <section id="information-collection" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    Information We Collect
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="space-y-4 text-neutral-700">
                    <p>
                      At <span className="font-semibold text-primary-600">Gratial Legalities</span>, we collect information that you provide directly to us, as well as information automatically collected through your use of our services.
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-4">Personal Information You Provide</h3>
                      <ul className="space-y-3 ml-4">
                        <li className="flex items-start">
                          <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          </div>
                          <span><strong>Contact Information:</strong> Name, Phone Number, Practice Area, Email address, Mailing address, Subject, Urgency level, Message </span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          </div>
                          <span><strong>Case Details:</strong> Information related to your legal matter</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-primary-100 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          </div>
                          <span><strong>Identification:</strong> Government-issued ID, date of birth</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="information-use" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Legal Services",
                        description: "To provide and manage legal services, communicate about your case, and process transactions."
                      },
                      {
                        title: "Communication",
                        description: "To respond to inquiries, send updates, and provide client support."
                      },
                      {
                        title: "Security & Compliance",
                        description: "To protect against fraud, comply with legal obligations, and enforce our terms."
                      },
                      {
                        title: "Improvement",
                        description: "To enhance our services, website functionality, and client experience."
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-neutral-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h3>
                        <p className="text-neutral-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="information-sharing" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    Information Sharing & Disclosure
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="space-y-4 text-neutral-700">
                    <p>
                      We take client confidentiality seriously. Your information is shared only under specific circumstances:
                    </p>
                    
                    <div className="mt-6 space-y-6">
                      <div className="flex items-start">
                        <div className="bg-success-100 text-success-800 rounded-full px-3 py-1 text-sm font-semibold mr-4 mt-1">
                          Legal Requirement
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">When Required by Law</h4>
                          <p className="text-neutral-600 mt-1">To comply with legal obligations, court orders, or government requests.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-success-100 text-success-800 rounded-full px-3 py-1 text-sm font-semibold mr-4 mt-1">
                          Service Providers
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">Trusted Third Parties</h4>
                          <p className="text-neutral-600 mt-1">With service providers who assist our operations under strict confidentiality agreements.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-success-100 text-success-800 rounded-full px-3 py-1 text-sm font-semibold mr-4 mt-1">
                          With Consent
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900">With Your Authorization</h4>
                          <p className="text-neutral-600 mt-1">When you explicitly authorize disclosure for specific purposes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-security" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    Data Security
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="flex items-center justify-center mb-8">
                    <div className="bg-primary-100 rounded-full p-4">
                      <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center space-y-4 text-neutral-700">
                    <p className="text-xl font-semibold text-primary-600">
                      Protecting your information is our top priority
                    </p>
                    <p>
                      We implement industry-standard security measures including encryption, secure servers, access controls, and regular security audits. However, no method of electronic transmission or storage is 100% secure.
                    </p>
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <p className="text-sm text-neutral-500">
                        <strong>Attorney-Client Privilege:</strong> Communications with our attorneys are protected by attorney-client privilege to the fullest extent permitted by law.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="your-rights" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">5</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    Your Rights & Choices
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                  <div className="space-y-6">
                    <p className="text-neutral-700">
                      Depending on your jurisdiction, you may have certain rights regarding your personal information:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { right: "Access", desc: "Request access to your personal information" },
                        { right: "Correction", desc: "Request correction of inaccurate data" },
                        { right: "Deletion", desc: "Request deletion of your personal information" },
                        { right: "Objection", desc: "Object to processing of your data" },
                        { right: "Portability", desc: "Request data portability" },
                        { right: "Withdraw Consent", desc: "Withdraw consent at any time" }
                      ].map((item, index) => (
                        <div key={index} className="border border-neutral-200 rounded-lg p-4 hover:border-primary-300 transition-colors duration-200">
                          <div className="font-semibold text-primary-600 mb-1">{item.right}</div>
                          <div className="text-sm text-neutral-600">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 bg-primary-50 rounded-lg p-6">
                      <p className="text-primary-800 font-semibold">
                        To exercise any of these rights, please contact us using the information provided in Section 10.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sections 6-9 - Condensed for brevity */}
              {[
                {
                  id: 'cookies',
                  number: '6',
                  title: 'Cookies & Tracking Technologies',
                  content: (
                    <div className="space-y-4 text-neutral-700">
                      <p>We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior.</p>
                      <div className="bg-neutral-50 rounded-lg p-5 mt-4">
                        <h4 className="font-semibold text-neutral-900 mb-2">Cookie Types We Use:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <div className="w-3 h-3 bg-primary-500 rounded-full mr-3"></div>
                            <span><strong>Essential Cookies:</strong> Required for website functionality</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-3 h-3 bg-info-500 rounded-full mr-3"></div>
                            <span><strong>Analytics Cookies:</strong> Help us improve our services</span>
                          </li>
                          <li className="flex items-center">
                            <div className="w-3 h-3 bg-success-500 rounded-full mr-3"></div>
                            <span><strong>Preference Cookies:</strong> Remember your settings</span>
                          </li>
                        </ul>
                      </div>
                      <p className="mt-4">You can control cookie preferences through your browser settings.</p>
                    </div>
                  )
                },
                {
                  id: 'children',
                  number: '7',
                  title: 'Children\'s Privacy',
                  content: (
                    <div className="space-y-4 text-neutral-700">
                      <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
                      <div className="bg-warning-50 border border-warning-200 rounded-lg p-4">
                        <p className="text-warning-800">
                          <strong>Important:</strong> If you believe we have collected information from a child, please contact us immediately.
                        </p>
                      </div>
                    </div>
                  )
                },
                {
                  id: 'international',
                  number: '8',
                  title: 'International Data Transfers',
                  content: (
                    <div className="space-y-4 text-neutral-700">
                      <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                    </div>
                  )
                },
                {
                  id: 'policy-changes',
                  number: '9',
                  title: 'Changes to This Policy',
                  content: (
                    <div className="space-y-4 text-neutral-700">
                      <p>We may update this privacy policy periodically. We will notify you of significant changes by posting the new policy on our website with an updated effective date.</p>
                    </div>
                  )
                }
              ].map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                      <span className="font-bold">{section.number}</span>
                    </div>
                    <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                      {section.title}
                    </h2>
                  </div>
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6 md:p-8">
                    {section.content}
                  </div>
                </section>
              ))}

              {/* Section 10 - Contact */}
              <section id="contact" className="scroll-mt-24">
                <div className="flex items-center mb-6">
                  <div className="bg-primary-500 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4">
                    <span className="font-bold">10</span>
                  </div>
                  <h2 className="text-3xl font-heading font-semibold text-neutral-900">
                    Contact Us
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl shadow-sm border border-primary-200 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-semibold text-neutral-900 mb-4">
                      Questions About Our Privacy Policy?
                    </h3>
                    <p className="text-neutral-700 max-w-2xl mx-auto">
                      If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">By Phone</h4>
                      <p className="text-primary-600 font-medium">(555) 123-4567</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">By Email</h4>
                      <p className="text-primary-600 font-medium">privacy@lawfirm.com</p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                      <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">By Mail</h4>
                      <p className="text-neutral-600 text-sm">123 Legal Street<br />Suite 100<br />City, State 12345</p>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-primary-200">
                    <p className="text-center text-neutral-600">
                      For data protection officer inquiries, please use the subject line "DPO Inquiry" in your communication.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
<Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;