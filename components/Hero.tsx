import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="container mx-auto px-6 pt-32 pb-16 md:py-32 flex items-center min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight animate-fadeInUp">
            <span className="text-teal-500">Data</span>
            <br />
            <span className="text-indigo-600">Analyst</span>
          </h1>
          <p 
            className="mt-6 text-lg text-slate-600 max-w-xl mx-auto md:mx-0 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            Transforming complex data into actionable insights. I specialize in data visualization, statistical analysis, and predictive modeling to help businesses make smarter, data-driven decisions.
          </p>
          <div 
            className="mt-10 flex items-center justify-center md:justify-start space-x-6 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="#projects"
              className="bg-indigo-600 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-indigo-200/80 hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="text-slate-700 font-medium hover:text-indigo-600 transition-colors duration-300 group"
            >
              Contact me <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Image */}
        <div 
          className="flex justify-center animate-fadeInUp"
          style={{ animationDelay: '0.3s' }}
        >
          {/* Gradient circular container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96 p-2 rounded-full bg-gradient-to-br from-teal-400 to-indigo-600 shadow-2xl shadow-indigo-200/50">
            <div className="bg-slate-50 rounded-full w-full h-full p-2">
              <img 
                src="https://i.postimg.cc/ZnJtNXHx/Remove-background-project.png" 
                alt="Portrait of the Data Analyst" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;