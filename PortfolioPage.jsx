import React, { useState } from 'react';
import { Filter, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    'All',
    'Marketing',
    'Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Entry Level',
    'Mid Level',
    'Executive'
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Marketing Manager",
      category: "Marketing",
      level: "Mid Level",
      description: "Transformed a cluttered, outdated resume into a modern, ATS-optimized document that highlights key achievements and quantifiable results.",
      result: "Landed 5 interviews in 2 weeks",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 2,
      title: "Software Developer",
      category: "Technology",
      level: "Mid Level",
      description: "Restructured technical experience to showcase impact and results, not just responsibilities. Emphasized problem-solving skills and project outcomes.",
      result: "Got hired at Google",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 3,
      title: "Finance Analyst",
      category: "Finance",
      level: "Entry Level",
      description: "Created a compelling entry-level resume that highlighted relevant coursework, internships, and transferable skills from part-time work.",
      result: "Promoted within 6 months",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 4,
      title: "HR Director",
      category: "Healthcare",
      level: "Executive",
      description: "Developed an executive-level resume that showcased leadership achievements, strategic initiatives, and measurable business impact.",
      result: "Secured C-suite position",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 5,
      title: "Product Manager",
      category: "Technology",
      level: "Mid Level",
      description: "Highlighted cross-functional leadership, product launches, and user growth metrics to create a compelling product management narrative.",
      result: "Increased salary by 40%",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 6,
      title: "Sales Executive",
      category: "Marketing",
      level: "Executive",
      description: "Emphasized revenue generation, team leadership, and client relationship management to showcase sales expertise and business impact.",
      result: "Landed dream role at Fortune 500",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 7,
      title: "Nurse Practitioner",
      category: "Healthcare",
      level: "Mid Level",
      description: "Highlighted clinical expertise, patient care outcomes, and continuing education to create a compelling healthcare professional resume.",
      result: "Got hired at top hospital",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 8,
      title: "Teacher",
      category: "Education",
      level: "Entry Level",
      description: "Showcased educational philosophy, classroom management skills, and student achievement outcomes for a new teaching graduate.",
      result: "Hired at preferred school district",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    },
    {
      id: 9,
      title: "Data Scientist",
      category: "Technology",
      level: "Mid Level",
      description: "Emphasized technical skills, machine learning projects, and business impact of data-driven insights and recommendations.",
      result: "Joined leading AI startup",
      beforeImage: "/api/placeholder/400/500",
      afterImage: "/api/placeholder/400/500"
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'All') return true;
    return item.category === activeFilter || item.level === activeFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resume Transformations Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped 500+ professionals across industries land their dream jobs 
            with expertly crafted, ATS-optimized resumes.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <span className="text-gray-700 font-medium">Filter by:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <BeforeAfterSlider
                key={item.id}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                title={item.title}
                description={item.description}
                result={item.result}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No transformations found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Privacy Notice */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-blue-200 p-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Privacy & Confidentiality</h3>
            </div>
            <div className="text-center text-gray-600 space-y-2">
              <p>
                🔒 All client information displayed in our portfolio has been completely anonymized 
                and is used with explicit permission from our clients.
              </p>
              <p>
                We take client confidentiality seriously and never share personal information, 
                company names, or identifying details without consent.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                The before/after examples shown represent the quality and style of our work, 
                with all sensitive information removed or replaced with placeholder content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our successful clients and get a resume that opens doors to your dream career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Start Your Resume Makeover
            </a>
            <a
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;

