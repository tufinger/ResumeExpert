import React from 'react';
import { Check, Clock, Shield, Star, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const servicePackages = [
    {
      name: "Essential",
      price: "$199",
      popular: false,
      description: "Perfect for entry-level professionals and career changers",
      features: [
        "Professional Resume Writing",
        "ATS-Optimized Content",
        "Modern Design Template",
        "Cover Letter",
        "2 Rounds of Revisions",
        "3-5 Business Days Delivery",
        "Email Support"
      ],
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$299",
      popular: true,
      description: "Most popular choice for mid-level professionals",
      features: [
        "Everything in Essential",
        "LinkedIn Profile Optimization",
        "Professional Summary Enhancement",
        "Achievement-Focused Content",
        "Industry-Specific Keywords",
        "Unlimited Revisions (30 days)",
        "Priority Support",
        "Thank You Letter Template"
      ],
      cta: "Most Popular"
    },
    {
      name: "Executive",
      price: "$499",
      popular: false,
      description: "Comprehensive package for senior executives and C-level professionals",
      features: [
        "Everything in Professional",
        "Executive Bio Writing",
        "Interview Preparation Guide",
        "Salary Negotiation Tips",
        "Personal Branding Strategy",
        "Executive Summary",
        "1-on-1 Consultation Call",
        "Rush Delivery Available",
        "90-Day Revision Guarantee"
      ],
      cta: "Premium Choice"
    }
  ];

  const additionalServices = [
    {
      name: "LinkedIn Profile Optimization",
      price: "$99",
      description: "Standalone LinkedIn profile writing and optimization"
    },
    {
      name: "Cover Letter Writing",
      price: "$79",
      description: "Custom cover letter tailored to your target position"
    },
    {
      name: "Interview Preparation",
      price: "$149",
      description: "1-hour coaching session with common questions and answers"
    },
    {
      name: "Career Consultation",
      price: "$199",
      description: "Strategic career planning and job search guidance"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Order & Consultation",
      description: "Choose your package and complete our detailed questionnaire. We'll schedule a consultation call to understand your goals."
    },
    {
      step: "2",
      title: "Expert Writing",
      description: "Our certified resume writers craft your resume using industry best practices and ATS optimization techniques."
    },
    {
      step: "3",
      title: "Review & Revisions",
      description: "Review your draft and request any changes. We offer unlimited revisions to ensure your complete satisfaction."
    },
    {
      step: "4",
      title: "Final Delivery",
      description: "Receive your final resume in multiple formats (PDF, Word) along with any additional materials included in your package."
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied, we'll work with you until you are, or provide a full refund."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "On-Time Delivery",
      description: "We guarantee delivery within the promised timeframe or your money back."
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "ATS-Optimized",
      description: "All resumes are optimized to pass Applicant Tracking Systems and reach human recruiters."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Resume Writing Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package to transform your career. All packages include expert writing, 
            ATS optimization, and our satisfaction guarantee.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-lg shadow-lg border-2 p-8 ${
                  pkg.popular
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your job search with our specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 4-step process ensures you get the best results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-6 inline-block">
              <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <p className="text-lg font-semibold text-gray-900 mb-1">Typical Turnaround Time</p>
              <p className="text-blue-600 font-bold">3-5 Business Days</p>
              <p className="text-sm text-gray-600 mt-2">Rush delivery available for Executive packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-gray-600">
              We stand behind our work with industry-leading guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Choose your package and take the first step toward landing your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Order Now
            </a>
            <a
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

