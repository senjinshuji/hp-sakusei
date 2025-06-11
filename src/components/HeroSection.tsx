import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-16 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%233b82f6" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-6">
            Building the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500">
              Future Together
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Senjin Holdings is a forward-thinking investment company dedicated to 
            identifying and nurturing innovative opportunities that shape tomorrow's landscape.
          </p>
          
          {/* Key features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
              <span className="text-sm font-medium text-gray-700">🚀 Innovation Focused</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
              <span className="text-sm font-medium text-gray-700">🌱 Sustainable Growth</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-100">
              <span className="text-sm font-medium text-gray-700">🤝 Strategic Partnerships</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover Our Vision
            </Link>
            <Link
              href="/projects"
              className="bg-white hover:bg-gray-50 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 transition-all duration-200 transform hover:scale-105"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Investment Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">$2.5B+</div>
            <div className="text-gray-600 font-medium">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-12 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;