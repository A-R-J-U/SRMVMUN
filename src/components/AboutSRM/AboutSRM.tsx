import React from 'react';

const AboutSRM: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="relative inline-block text-4xl md:text-5xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif] mb-6 group">
  About SRM
  <span className="absolute bottom-[-8px] left-0 h-1 w-full bg-[#EFDB9E] origin-left scale-x-100"></span>
</h2>
              {/* Keep the underline height container to preserve spacing */}
              <div className="w-24 h-1 bg-transparent mb-8" />
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">50K+</div>
                <div className="text-gray-400 text-sm">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">40+</div>
                <div className="text-gray-400 text-sm">Years Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">100+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Top 10</div>
                <div className="text-gray-400 text-sm">Ranking</div>
              </div>
            </div>
          </div>

          {/* Right Content – replace cards with image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://srmistvdp.edu.in/wp-content/uploads/2024/03/front-view-1-1.jpg"
              alt="SRM campus overview"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSRM;
