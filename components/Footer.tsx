import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import Link from "next/link";

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/canada.png"
                  alt="PG Clean Ltd. logo"
                  width={120}
                  height={59}
                  className=""
                />
              </div>
              <h3 className="text-2xl font-bold text-[#4CD1FE] mb-4">
                Reach Out to
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                We are here to help. Contact us for more information about our
                services, to get involved, or to share your feedback.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#4CD1FE] mr-3" />
                  <a
                    href="tel:+47926961792"
                    className="text-gray-300 hover:text-white transition"
                  >
                    +47 926 96 1792
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#4CD1FE] mr-3" />
                  <a
                    href="mailto:pgcleanlimited@gmail.com"
                    className="text-gray-300 hover:text-white transition"
                  >
                    pgcleanlimited@gmail.com
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#4CD1FE] mr-3 mt-1" />
                  <span className="text-gray-300 leading-relaxed">
                    Princess Elizabeth Way, Cheltenham GL51 7BT, <br />
                    United Kingdom
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg text-[#4CD1FE] font-semibold mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-[#4CD1FE] transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-300 hover:text-[#4CD1FE] transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#4CD1FE] transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-300 hover:text-[#4CD1FE] transition-colors duration-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div>
              <h4 className="text-lg text-[#4CD1FE] font-semibold mb-6">
                Follow Us
              </h4>

              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#4CD1FE] hover:text-black transition"
                >
                  <FaFacebook size={18} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#4CD1FE] hover:text-black transition"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-[#4CD1FE] hover:text-black transition"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

              <p className="text-gray-400 mt-6 text-sm">
                Stay connected with PG Clean Ltd for updates, offers, and
                cleaning tips.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              Copyright © 2026 PG Clean Ltd. All rights reserved.
            </p>
            <span>
              Developed by&nbsp;
              <a
                rel="noopener noreferrer"
                className="underline text-[#4CD1FE]"
                href="https://r2systemsolution.co.uk"
                target="_blank"
              >
                R2 system solution Ltd.
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
