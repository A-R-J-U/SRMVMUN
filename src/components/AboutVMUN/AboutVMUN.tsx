import React from 'react';

const AboutSRM: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Content – replace cards with image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/placeholder.png"
              alt="SRM campus overview"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif] mb-6 group">
  About VMUN
  <span className="absolute bottom-[-8px] left-0 h-1 w-full bg-[#EFDB9E] origin-left scale-x-100"></span>
</h2>
              <div className="w-24 h-1 text-[#EFDB9E] font-['Bahnschrift',sans-serif] mb-8" />
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                SRM Institute of Science and Technology stands as one of India's premier educational institutions,
                fostering excellence in academics, research, and holistic development since 1985.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                With a commitment to nurturing global citizens, SRM has consistently ranked among the top universities
                in India, producing leaders who shape the future across diverse fields including technology, business,
                healthcare, and diplomacy.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our institution's dedication to international exposure and cross-cultural understanding makes it
                the perfect foundation for hosting world-class Model United Nations conferences.
              </p>
            </div>

            </div>

          
        </div>
      </div>
    </section>
  );
};

export default AboutSRM;
