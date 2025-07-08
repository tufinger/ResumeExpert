import React from 'react';
import { Award, BookOpen, Users, Target, CheckCircle, Star, Briefcase } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const expertiseAreas = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Technology & IT",
      description: "Software developers, data scientists, cybersecurity professionals, and IT managers"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Healthcare & Medical",
      description: "Nurses, doctors, healthcare administrators, and medical professionals"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Finance & Banking",
      description: "Financial analysts, investment bankers, accountants, and finance executives"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Marketing & Sales",
      description: "Digital marketers, sales executives, brand managers, and marketing directors"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
      title: "Education & Non-Profit",
      description: "Teachers, administrators, non-profit leaders, and educational professionals"
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Executive Leadership",
      description: "C-suite executives, VPs, directors, and senior management professionals"
    }
  ];

  const credentials = [
    {
      type: "Certification",
      title: "Certified Professional Resume Writer (CPRW)",
      organization: "Professional Association of Resume Writers & Career Coaches",
      year: "2018"
    },
    {
      type: "Education",
      title: "Master's in Human Resources Management",
      organization: "New York University",
      year: "2015"
    },
    {
      type: "Certification",
      title: "LinkedIn Certified Career Coach",
      organization: "LinkedIn Learning",
      year: "2020"
    },
    {
      type: "Certification",
      title: "Certified Career Development Facilitator",
      organization: "National Career Development Association",
      year: "2019"
    }
  ];

  const memberships = [
    "National Resume Writers' Association (NRWA)",
    "Career Development Alliance (CDA)",
    "Professional Association of Resume Writers & Career Coaches (PARW/CC)",
    "International Coach Federation (ICF)",
    "Society for Human Resource Management (SHRM)"
  ];

  const achievements = [
    {
      number: "500+",
      label: "Successful Clients",
      description: "Professionals helped across all industries"
    },
    {
      number: "95%",
      label: "Interview Success Rate",
      description: "Clients who land interviews within 30 days"
    },
    {
      number: "10+",
      label: "Years Experience",
      description: "In professional resume writing and career coaching"
    },
    {
      number: "50+",
      label: "Industries Served",
      description: "From startups to Fortune 500 companies"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Professional Headshot */}
            <div className="text-center lg:text-left">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full bg-gray-300 mb-6 overflow-hidden">
                <img 
                  src="/src/assets/images/francis-solademi-headshot.png" 
                  alt="Francis Solademi - Professional Resume Writer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Professional Bio */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Your Resume Expert
              </h1>
              <div className="text-xl text-gray-600 space-y-4">
                <p>
                  Hi, I\'m <strong className="text-gray-900">Francis Solademi</strong>, a certified professional resume writer                   with over 10 years of experience helping professionals transform their careers.
                </p>
                <p>
                  As a former HR director and certified career coach, I understand what hiring managers 
                  and recruiters are looking for in today's competitive job market.
                </p>
                <p>
                  I've helped over 500 professionals across diverse industries land their dream jobs, 
                  increase their salaries, and advance their careers through expertly crafted resumes 
                  and strategic career guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Journey into Resume Writing
            </h2>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              My passion for resume writing began during my tenure as an HR Director at a Fortune 500 company, 
              where I reviewed thousands of resumes and witnessed firsthand how a well-crafted resume could 
              make the difference between landing an interview and being overlooked.
            </p>
            
            <p>
              I noticed that many talented professionals were being passed over simply because their resumes 
              didn't effectively communicate their value. This realization sparked my mission to help job seekers 
              present their best selves on paper.
            </p>
            
            <p>
              After transitioning from corporate HR to resume writing, I've dedicated myself to staying current 
              with industry trends, ATS technology, and hiring practices. I regularly attend professional 
              development workshops and maintain certifications to ensure my clients receive the most 
              up-to-date and effective resume strategies.
            </p>
            
            <p>
              What drives me most is seeing the transformation in my clients' confidence and the success 
              they achieve in their job searches. There's nothing more rewarding than receiving a message 
              from a client who just landed their dream job!
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in helping professionals across diverse industries and career levels 
              achieve their career goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  {area.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{area.title}</h3>
                </div>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Track Record of Success
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-xl font-semibold text-gray-900 mb-2">
                  {achievement.label}
                </div>
                <div className="text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Certifications & Education
              </h2>
              
              <div className="space-y-6">
                {credentials.map((credential, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          credential.type === 'Certification' ? 'bg-blue-100' : 'bg-green-100'
                        }`}>
                          {credential.type === 'Certification' ? (
                            <Award className={`w-6 h-6 ${
                              credential.type === 'Certification' ? 'text-blue-600' : 'text-green-600'
                            }`} />
                          ) : (
                            <BookOpen className="w-6 h-6 text-green-600" />
                          )}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {credential.title}
                        </h3>
                        <p className="text-gray-600 mb-1">{credential.organization}</p>
                        <p className="text-sm text-gray-500">{credential.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Memberships */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Memberships
              </h2>
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <p className="text-gray-600 mb-6">
                  Active member of leading professional organizations in the resume writing 
                  and career development industry:
                </p>
                
                <ul className="space-y-3">
                  {memberships.map((membership, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{membership}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commitment to Excellence */}
              <div className="mt-8 bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Commitment to Excellence
                </h3>
                <p className="text-gray-600">
                  I regularly attend industry conferences, participate in continuing education, 
                  and stay updated on the latest trends in hiring, ATS technology, and career 
                  development to ensure my clients receive the most current and effective strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's transform your career with a professionally written resume that gets results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started Today
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;

