import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Logo and Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {/* Logo Section - Left */}
          <div className="flex flex-col items-center lg:items-start space-y-4 lg:ml-6">
            <div className="w-24 h-24 lg:w-32 lg:h-32 relative">
              <Image
                src="/event-logo.png"
                alt="SRMV MUN 25 Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* About Section - Center */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">About MUN</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering future diplomats through Model United Nations. Join us in fostering global awareness,
              critical thinking, and diplomatic skills.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links - Right */}
          <div className="space-y-4 text-center lg:text-right lg:mr-6">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#800301] transition-colors text-sm">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#800301] transition-colors text-sm">
                  Committees
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#800301] transition-colors text-sm">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#800301] transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#800301] transition-colors text-sm">
                  Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 border-t border-gray-800 pt-6 lg:pt-8">
          {/* Contact Info */}
          <div className="space-y-4 text-center lg:text-left lg:ml-6">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center lg:justify-start">
                <MapPin size={16} className="text-[#800301] mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  SRM Institute of Science and Technology
                  <br />
                  Vadapalani Campus, Chennai - 600026
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Mail size={16} className="text-[#800301] flex-shrink-0" />
                <Link
                  href="mailto:srmvmun25@gmail.com"
                  className="text-gray-300 hover:text-[#EFDB9E] text-sm transition-colors"
                >
                  srmvmun25@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Phone size={16} className="text-[#800301] flex-shrink-0" />
                <Link href="tel:+919876543210" className="text-gray-300 hover:text-[#EFDB9E] text-sm transition-colors">
                  +91 98765 43210
                </Link>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="space-y-4 text-center lg:text-right lg:mr-6">
            <h3 className="text-lg font-semibold text-[#EFDB9E] font-['Bahnschrift',sans-serif]">Find Us</h3>
            <div className="w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8267739870973!2d80.21437931482213!3d13.052677990806308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526650e0b6c595%3A0x4f74ddbff946af6b!2sSRM%20Institute%20of%20Science%20and%20Technology%2C%20Vadapalani%20Campus!5e0!3m2!1sen!2sin!4v1642678901234!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm text-center sm:text-left ml-6">© {new Date().getFullYear()} SRMV MUN 25. All rights reserved.</div>
            <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 mr-6">
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#EFDB9E] text-sm transition-colors">
                Code of Conduct
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
