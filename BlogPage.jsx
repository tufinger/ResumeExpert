import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Resume Writing Tips',
    'Job Search Strategies',
    'Industry Insights',
    'Interview Preparation',
    'Career Development',
    'LinkedIn Optimization'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "10 Resume Mistakes That Are Costing You Interviews",
      excerpt: "Discover the most common resume mistakes that prevent job seekers from landing interviews and learn how to fix them.",
      category: "Resume Writing Tips",
      author: "Sarah Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 2,
      title: "How to Optimize Your LinkedIn Profile for Maximum Visibility",
      excerpt: "Learn the essential strategies to make your LinkedIn profile stand out to recruiters and hiring managers.",
      category: "LinkedIn Optimization",
      author: "Sarah Johnson",
      date: "2025-01-10",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 3,
      title: "The Ultimate Guide to ATS-Friendly Resumes",
      excerpt: "Everything you need to know about creating resumes that pass Applicant Tracking Systems and reach human recruiters.",
      category: "Resume Writing Tips",
      author: "Sarah Johnson",
      date: "2025-01-05",
      readTime: "8 min read",
      image: "/api/placeholder/400/250",
      featured: true
    },
    {
      id: 4,
      title: "Salary Negotiation: How to Get the Pay You Deserve",
      excerpt: "Master the art of salary negotiation with proven strategies that help you secure better compensation packages.",
      category: "Career Development",
      author: "Sarah Johnson",
      date: "2024-12-28",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 5,
      title: "Interview Questions Every Job Seeker Should Prepare For",
      excerpt: "Get ready for your next interview with this comprehensive list of common questions and expert-approved answers.",
      category: "Interview Preparation",
      author: "Sarah Johnson",
      date: "2024-12-20",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 6,
      title: "Industry Spotlight: Tech Resume Trends for 2025",
      excerpt: "Stay ahead of the curve with the latest resume trends specifically for technology professionals.",
      category: "Industry Insights",
      author: "Sarah Johnson",
      date: "2024-12-15",
      readTime: "4 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 7,
      title: "Career Change at 40: A Complete Guide",
      excerpt: "Navigate a successful career transition later in life with strategic planning and the right approach.",
      category: "Career Development",
      author: "Sarah Johnson",
      date: "2024-12-10",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      featured: false
    },
    {
      id: 8,
      title: "The Hidden Job Market: How to Find Unadvertised Opportunities",
      excerpt: "Discover strategies to tap into the hidden job market and find opportunities that aren't publicly posted.",
      category: "Job Search Strategies",
      author: "Sarah Johnson",
      date: "2024-12-05",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Title */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Insights & Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice on resume writing, job search strategies, and career development 
            to help you succeed in today's competitive job market.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            {selectedCategory === 'All' && searchTerm === '' && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Tag className="w-4 h-4 mr-1" />
                          <span className="text-blue-600">{post.category}</span>
                          <span className="mx-2">•</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          <a href={`/blog/${post.id}`}>{post.title}</a>
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="w-4 h-4 mr-1" />
                            <span>{post.author}</span>
                            <span className="mx-2">•</span>
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <a 
                            href={`/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
                {searchTerm && ` - Search results for "${searchTerm}"`}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Tag className="w-4 h-4 mr-1" />
                            <span className="text-blue-600">{post.category}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                            <a href={`/blog/${post.id}`}>{post.title}</a>
                          </h3>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                              <span className="mx-2">•</span>
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <a 
                              href={`/blog/${post.id}`}
                              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                            >
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Posts */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors">
                      <a href={`/blog/${post.id}`}>{post.title}</a>
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-blue-100 mb-4">
                Get the latest career tips and job search strategies delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;

