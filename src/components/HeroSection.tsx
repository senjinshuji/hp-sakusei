export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-16 pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Building the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Future Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Senjin Holdings is a forward-thinking investment company dedicated to 
            identifying and nurturing innovative opportunities that shape tomorrow&apos;s landscape.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
              <span className="text-sm font-medium text-gray-700">🚀 Innovation Focused</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
              <span className="text-sm font-medium text-gray-700">🌱 Sustainable Growth</span>
            </div>
            <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100">
              <span className="text-sm font-medium text-gray-700">🤝 Strategic Partnerships</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover Our Vision
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Investment Projects</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">$2.5B+</div>
            <div className="text-gray-600 font-medium">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600 font-medium">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}