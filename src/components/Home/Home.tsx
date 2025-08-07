"use client";
import { useState, useEffect, useMemo } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const texts = useMemo(() => [
    "SRMVMUN 2025",
    "Model United Nations",
    "Diplomacy in Action",
    "Global Perspectives",
    "Leadership & Debate"
  ], []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < texts[currentTextIndex].length) {
        setCurrentCharIndex(prev => prev + 1);
      } else if (!isDeleting && currentCharIndex === texts[currentTextIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentCharIndex > 0) {
        setCurrentCharIndex(prev => prev - 1);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex, texts]);

  const currentText = texts[currentTextIndex];
  const displayedText = currentText.substring(0, currentCharIndex);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" style={{ fontFamily: 'var(--font-poppins)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#EFDB9E]/10 to-[#EFDB9E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-[#800301]/10 to-[#EFDB9E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#EFDB9E]/5 to-[#800301]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(239,219,158,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,219,158,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main heading with typing animation */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
              }}>
            <span className="text-white">Welcome to</span>
            <br />
            <span className="bg-gradient-to-r from-[#EFDB9E] via-[#EFDB9E] to-[#EFDB9E] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-poppins)' }}>
              {displayedText}
            </span>
            <span className="animate-pulse" style={{ color: '#EFDB9E' }}>|</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12 transition-all duration-1000 delay-300 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
             }}>
          <p className="text-md md:text-lg lg:text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
          Join delegates from around the world in simulating the United Nations
          </p>
          
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-500 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
             }}>
          <button className="group relative px-8 py-4 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: '#EFDB9E',
                    boxShadow: '0 0 20px rgba(239, 219, 158, 0.25)'
                  }}>
            <span className="flex items-center gap-2">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="group px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  style={{ 
                    borderColor: '#EFDB9E',
                    color: '#EFDB9E'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#EFDB9E';
                    e.currentTarget.style.color = '#800301';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#EFDB9E';
                  }}>
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-700 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
             }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#EFDB9E' }}>500+</div>
            <div className="text-gray-400">Delegates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#EFDB9E' }}>50+</div>
            <div className="text-gray-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#EFDB9E' }}>3</div>
            <div className="text-gray-400">Days</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-1000 ease-out"
             style={{
               opacity: isVisible ? 1 : 0,
               transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)'
             }}>
          <ChevronDown className="w-6 h-6" style={{ color: '#EFDB9E' }} />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: '#EFDB9E' }}></div>
      <div className="absolute top-3/4 right-10 w-3 h-3 rounded-full animate-ping delay-1000" style={{ backgroundColor: '#EFDB9E' }}></div>
      <div className="absolute bottom-1/4 left-20 w-1 h-1 rounded-full animate-ping delay-2000" style={{ backgroundColor: '#EFDB9E' }}></div>
    </div>
  );
};

export default Home;