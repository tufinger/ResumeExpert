import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BeforeAfterSlider = ({ beforeImage, afterImage, title, description, result }) => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Image Container */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={isAfter ? afterImage : beforeImage}
            alt={isAfter ? `${title} - After` : `${title} - Before`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
          
          {/* Before/After Label */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              isAfter 
                ? 'bg-green-600 text-white' 
                : 'bg-red-600 text-white'
            }`}>
              {isAfter ? 'After' : 'Before'}
            </span>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => setIsAfter(false)}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
              !isAfter 
                ? 'bg-red-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsAfter(true)}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-colors ${
              isAfter 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-green-800 font-medium">✨ {result}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

