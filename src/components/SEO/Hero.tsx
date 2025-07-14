
import { ArrowRight, Play, Star, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-[50px] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#E26E02]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#E26E02]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E26E02]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
           

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#E26E02]">
                Best SEO Company
              </span>
              <br />
              <span className="text-[#141414]">in Zirakpur</span>
              <br />
              <span className="text-gray-600">
                Punjab, India
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              NetBond Technologies is the leading SEO company in Zirakpur, helping businesses 
              achieve top search rankings and drive organic traffic with proven digital marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group flex items-center justify-center px-8 py-4 bg-[#E26E02] text-white rounded-md font-medium  hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer">
                Get SEO Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
        
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E26E02]">500+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E26E02]">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#E26E02]">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/60 backdrop-blur-lg border border-gray-200 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Organic Traffic Growth</span>
                    <TrendingUp className="w-5 h-5 text-[#E26E02]" />
                  </div>
                  
                  <div className="relative h-32 bg-gradient-to-r from-[#E26E02]/10 to-[#E26E02]/20 rounded-xl overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-[#E26E02] rounded-xl opacity-80"></div>
                    <div className="absolute top-4 right-4 text-right">
                      <div className="text-2xl font-bold text-[#141414]">+245%</div>
                      <div className="text-sm text-gray-600">Growth</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <Users className="w-4 h-4 text-[#E26E02] mr-2" />
                        <span className="text-sm font-medium text-gray-600">Visitors</span>
                      </div>
                      <div className="text-xl font-bold text-[#141414]">12.5K</div>
                      <div className="text-xs text-[#E26E02]">+32% this month</div>
                    </div>

                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200">
                      <div className="flex items-center mb-2">
                        <Award className="w-4 h-4 text-[#E26E02] mr-2" />
                        <span className="text-sm font-medium text-gray-600">Keywords</span>
                      </div>
                      <div className="text-xl font-bold text-[#141414]">150+</div>
                      <div className="text-xs text-[#E26E02]">Top 10 ranking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;