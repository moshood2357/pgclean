// import Link from "next/link";
// "use client";
// import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function AboutUs() {
  return (
    <div>
      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Star /> Experienced Professionals
              </li>
              <li className="flex items-center gap-3">
                <Star /> Affordable Pricing
              </li>
              <li className="flex items-center gap-3">
                <Star /> 100% Satisfaction Guarantee
              </li>
              <li className="flex items-center gap-3">
                <Star /> Eco‑Friendly Products
              </li>
            </ul>
          </div>
          <img
            src="sofa.jpg"
            alt="Happy customer"
            className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/40"
          />
        </div>
      </section>
    </div>
  );
}
