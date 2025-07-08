import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Users, Award, ArrowRight, FileText, Target, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import '../App.css';

const HomePage = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "ATS-Optimized Content",
      description: "Resumes designed to pass Applicant Tracking Systems and reach human recruiters."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-600" />,
      title: "Professional Design",
      description: "Modern, clean layouts that make a lasting impression on hiring managers."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Fast Results",
      description: "Get your professionally written resume in 3-5 business days with unlimited revisions."
    }
  ];

  const testimonials = [
    {
      quote: "I got 3 interviews in just 2 weeks after getting my resume rewritten. The transformation was incredible!",
      author: "Sarah M.",
      title: "Marketing Manager",
      rating: 5
    },
    {
      quote: "The team helped me transition from finance to tech. I landed my dream job at a startup within a month.",
      author: "Michael R.",
      title: "Product Manager",
      rating: 5
    },
    {
      quote: "Professional, fast, and effective. My new resume opened doors I never thought possible.",
      author: "Jennifer L.",
      title: "Executive Assistant",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "95%", label: "Interview Success Rate" },
    { number: "3-5", label: "Days Turnaround" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Career with
              <span className="text-blue-600 block">Professional Resume Writing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get noticed. Get hired. Get ahead. Our expert resume writers craft ATS-optimized resumes 
              that showcase your unique value and land you more interviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                Get Your Resume Rewritten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
              >
                View Our Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Resume Writing Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine industry expertise with proven strategies to create resumes that get results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Before/After */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resume Transformations That Get Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped professionals across industries land their dream jobs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <BeforeAfterSlider
              beforeImage="/src/assets/images/before-resume-example.jpg"
              afterImage="/src/assets/images/after-resume-example.jpg"
              title="Marketing Manager"
              description="Transformed a cluttered, outdated resume into a modern, ATS-optimized document that highlights key achievements."
              result="Landed 5 interviews in 2 weeks"
            />
            <BeforeAfterSlider
              beforeImage="/src/assets/images/before-resume-example.jpg"
              afterImage="/src/assets/images/after-resume-example.jpg"
              title="Software Developer"
              description="Restructured technical experience to showcase impact and results, not just responsibilities."
              result="Got hired at Google"
            />
          </div>
          
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View More Transformations
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span>Certified Resume Writers</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-blue-500 mr-2" />
                <span>Industry Recognition</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 text-purple-500 mr-2" />
                <span>500+ Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of professionals who have successfully landed their dream jobs with our expert resume writing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Resume Makeover
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

