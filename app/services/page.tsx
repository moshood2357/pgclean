"use client";

import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="">
      {/* head section */}
      <Header />

      <main className="bg-white overflow-hidden">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-linear-to-r from-blue-50 via-white to-indigo-100 py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Carpet & Upholstery Cleaning Services
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              At PG Clean Ltd, we provide reliable and professional carpet,
              upholstery, and rug cleaning services across Gloucestershire.
              Using advanced equipment and industry-approved cleaning methods,
              we deliver deep, long-lasting results.
            </p>
          </motion.div>
        </section>

        {/* ================= SERVICES DETAILS ================= */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Service 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6">
                  Deep Carpet Cleaning
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our deep carpet cleaning removes embedded dirt, stains,
                  allergens, and bacteria using professional-grade extraction
                  machines.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Removes tough stains & odours
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Safe for children & pets
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Fast drying times
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <img
                  src="/carpet.jpg"
                  alt="Deep carpet cleaning service"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Service 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 h-full"
              >
                <img
                  src="/chair.jpg"
                  alt="Upholstery cleaning service"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6">Upholstery Cleaning</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our upholstery cleaning carefully treats delicate fabrics
                  while delivering powerful stain removal and deep sanitation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Fabric-safe cleaning methods
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Odour neutralisation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Restores colour & freshness
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Service 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6">Rug Cleaning</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specialised rug cleaning tailored to material and weave type.
                  We protect fibres while restoring vibrancy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <img
                  src="/dry.jpg"
                  alt="Rug cleaning service"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* ================= Service 4 ================= */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6">Domestic Cleaning</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We provide professional home cleaning services designed to
                  keep your living spaces fresh, hygienic, and welcoming.
                  Whether you need a one-off deep clean or routine maintenance,
                  PG Clean Ltd delivers outstanding results with care and
                  attention to detail.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    End-of-tenancy cleaning
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Stain & odour removal
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Safe for families & pets
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Reliable & punctual service
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <img
                  src="/sofa.jpg"
                  alt="Domestic cleaning service"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* ================= Service 5 ================= */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 h-full"
              >
                <img
                  src="/circle.jpg"
                  alt="Commercial cleaning service"
                  className="rounded-2xl shadow-xl w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 flex flex-col justify-center"
              >
                <h2 className="text-3xl font-bold mb-6">Commercial Cleaning</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We support businesses across Gloucestershire with professional
                  commercial cleaning solutions. Our services help maintain a
                  clean, safe, and professional environment for staff and
                  customers.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Offices & corporate spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Retail & hospitality venues
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-blue-600" size={20} />
                    High-traffic deep cleaning
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="bg-blue-50 py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12"
            >
              Why Choose PG Clean Ltd?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "Professional Equipment",
                "Reliable & Friendly Service",
                "Guaranteed Satisfaction",
              ].map((title, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow"
                >
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">
                    Delivering high standards and customer satisfaction on every
                    job.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="py-20 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Refresh Your Home?
            </h2>
            <a
              href="tel:+47926961792"
              className="hidden md:inline-flex items-center gap-2 bg-[#4CD1FE] text-white px-4 py-2 rounded-2xl hover:bg-[#41bae2] transition"
            >
              <Phone size={18} />
              Call Now
            </a>
          </motion.div>
        </section>
      </main>

      {/* footer section */}
      <Footer />
    </div>
  );
}
