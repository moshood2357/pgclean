"use client"
import Link from "next/link";

import { motion } from "framer-motion";
export default function About() {
  return (
    <div>
      <section className="py-20 px-6 bg-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 ">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              PG Clean Ltd is a local Gloucestershire-based cleaning company
              committed to high standards and customer satisfaction. We pride
              ourselves on delivering a friendly, reliable service using
              professional equipment and proven cleaning methods. Whether it’s a
              single room or a full property, you can trust PG Clean Ltd to
              leave your carpets and upholstery fresh, clean, and hygienic.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We take great pride in delivering exceptional reliability,
              meticulous attention to detail, and consistently outstanding
              customer service. Whether it involves regular, routine maintenance
              to keep things in perfect condition or more intensive
              deep-cleaning services to remove stubborn stains, we are committed
              to providing results that you can count on and trust completely.
              Our team works diligently to ensure every task is completed to the
              highest standard, giving you peace of mind and a truly satisfying
              experience.
            </p>
            <Link
              href="/about-us"
              className="bg-[#4CD1FE] text-white px-6 py-3 rounded-2xl font-semibold hover:bg-[#41bae2] transition"
            >
              See More
            </Link>
          </motion.div>

          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/cleaning.jpg"
                alt="Professional carpet cleaning team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
