import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar, CheckCircle, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const serviceOptions = [
    'Essential Package ($199)',
    'Professional Package ($299)',
    'Executive Package ($499)',
    'LinkedIn Profile Optimization ($99)',
    'Cover Letter Writing ($79)',
    'Interview Preparation ($149)',
    'Career Consultation ($199)',
    'Custom Package (Let\'s discuss)'
  ];

  const timelineOptions = [
    'ASAP (Rush delivery)',
    '3-5 business days (Standard)',
    '1-2 weeks',
    'Flexible timeline'
  ];

  const budgetOptions = [
    'Under $200',
    '$200 - $300',
    '$300 - $500',
    'Over $500',
    'Let\'s discuss'
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email",
      value: "Getatsresume@gmail.com",
      description: "Send us a message anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone",
      value: "(555) 123-4567",
      description: "Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-600" />,
      title: "Location",
      value: "New York, NY",
      description: "Serving clients nationwide"
    }
  ];

  const responseGuarantees = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Quick Response",
      description: "Email responses within 2 hours during business hours"
    },
    {
      icon: <Phone className="w-8 h-8 text-green-600" />,
      title: "Same-Day Calls",
      description: "Phone calls returned the same business day"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Free Consultation",
      description: "15-minute consultation calls available"
    }
  ];

  const testimonials = [
    {
      quote: "Sarah was incredibly responsive and professional. She answered all my questions promptly and delivered exactly what she promised.",
      author: "Michael R.",
      title: "Product Manager"
    },
    {
      quote: "The consultation call was so helpful! Sarah understood my goals immediately and provided valuable insights even before we started working together.",
      author: "Jennifer L.",
      title: "Marketing Director"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your message has been received. I'll get back to you within 2 hours during business hours.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">What happens next?</h2>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• I'll review your project details and requirements</li>
                <li>• You'll receive a personalized response with next steps</li>
                <li>• We can schedule a free 15-minute consultation call</li>
                <li>• I'll provide a detailed timeline and process overview</li>
              </ul>
            </div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your career? Let's discuss your goals and create a plan 
            to help you land your dream job.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  required
                  rows={6}
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell me about your current situation, career goals, and what you're looking to achieve with your resume..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information & Guarantees */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch Directly</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Guarantees */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Response Guarantees</h3>
              <div className="space-y-4">
                {responseGuarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex-shrink-0 mr-4">
                      {guarantee.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{guarantee.title}</h4>
                      <p className="text-gray-600">{guarantee.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Booking */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Schedule Your Free Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Not ready to commit? Book a free 15-minute consultation call to discuss 
                your goals and see if we're a good fit.
              </p>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </button>
            </div>

            {/* Client Testimonials */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What Clients Say</h3>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-3">"{testimonial.quote}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-500 text-sm">{testimonial.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How quickly can you complete my resume?
              </h3>
              <p className="text-gray-600">
                Standard turnaround is 3-5 business days. Rush delivery (24-48 hours) is available 
                for Executive packages with an additional fee.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer revisions?
              </h3>
              <p className="text-gray-600">
                Yes! Essential packages include 2 rounds of revisions, Professional packages include 
                unlimited revisions for 30 days, and Executive packages include unlimited revisions for 90 days.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I'm not satisfied with the final result?
              </h3>
              <p className="text-gray-600">
                I offer a 100% satisfaction guarantee. If you're not completely satisfied, 
                I'll work with you until you are, or provide a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

