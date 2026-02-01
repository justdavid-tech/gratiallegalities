import React from 'react';
import { 
  Target, 
  Shield, 
  Users, 
  Building,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  HeartHandshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';

const About = () => {
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity First',
      description: 'We uphold the highest ethical standards in every case, ensuring transparency and honesty in all our dealings.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Pursuing the highest standards in legal practice, constantly evolving to deliver exceptional results.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-Centered',
      description: 'Your success is our ultimate measure. We tailor strategies to your unique needs and goals.'
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: 'Compassion',
      description: 'Understanding with empathy and care, guiding you through challenges with support and respect.'
    }
  ];

  const serviceStats = [
    { icon: <Scale className="w-6 h-6" />, value: '5+', label: 'Years Experience' },
    { icon: <Users className="w-6 h-6" />, value: '54+', label: 'Cases Won' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '96%', label: 'Success Rate' },
    { icon: <Building className="w-6 h-6" />, value: '11', label: 'Practice Areas' }
  ];

  return (
    <>
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-26 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Our Story Since 2022</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-primary">Gratial Legalities</span>
            </h1>
            
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive legal solutions in Abuja, Nigeria.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {serviceStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Our Story Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">
            Our <span className="text-primary">Journey</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              Founded in 2022, Gratial Legalities began with a simple yet powerful vision: to provide exceptional legal 
              services that prioritize client success above all else. Based in Abuja, Nigeria, we've built a reputation 
              for delivering strategic legal solutions tailored to our clients' unique needs.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed text-center">
              We combine legal expertise with a personal touch, ensuring that every client receives the attention and 
              commitment they deserve. Our growth has been strategic, focusing on enhancing our capabilities while 
              maintaining the quality of service that defines us.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-primary mt-8">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Serving clients with dedication since 2022</span>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-primary">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Led by experienced legal professionals dedicated to your success
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* CEO Image */}
                <div className="relative group">
                  <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden border border-primary/20 group-hover:border-primary/40 transition-all">
                    {/* Image Placeholder - Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-12 h-12 text-primary" />
                        </div>
                        <p className="text-gray-400 text-sm">CEO Photo</p>
                        <p className="text-gray-500 text-xs mt-1">Add image here</p>
                      </div>
                    </div>
                    {/* Uncomment and use this when you have the image:
                    <img 
                      src="/path-to-ceo-image.jpg" 
                      alt="CEO Name - Chief Executive Officer"
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* CEO Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Barrister Grace Idoko
                    </h3>
                    <p className="text-primary text-lg font-medium mb-4">
                      Chief Executive Officer & Lead Counsel
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
                  </div>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      With over 5 years of legal expertise, Barrister Grace leads Gratial Legalities with a commitment to 
                      excellence and client-focused service. Her vision has shaped the firm into a trusted partner for 
                      individuals and businesses seeking comprehensive legal solutions.
                    </p>
                    <p>
                      Under her leadership, the firm has maintained an exceptional track record of success, combining 
                      traditional legal expertise with modern, innovative approaches to meet the evolving needs of our clients.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Licensed to practice in Nigeria</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide every decision and action at Gratial Legalities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To provide exceptional legal representation that empowers our clients, 
              upholds justice, and sets new standards for excellence in the legal profession 
              through innovation, integrity, and unwavering dedication.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the most trusted legal services provider in Nigeria, recognized 
              for our commitment to client success and the advancement of 
              accessible, high-quality legal representation for all.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="relative bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-2xl p-8 border border-primary/30 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-50"></div>
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Ready to Work With Us?
                </h3>
                <p className="text-gray-300 text-lg">
                  Experience the Gratial Legalities difference for yourself
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact"
                  className="group px-8 py-4 bg-white text-secondary-950 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a 
                  href="tel:+2348138939107"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Email Us</div>
                    <a href="mailto:gratialegals@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      gratialegals@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Visit Us</div>
                    <div className="text-gray-400">1, Ondo Street, Garki, Abuja</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-white font-medium">Office Hours</div>
                    <div className="text-gray-400">Mon-Fri: 8am-6pm</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;