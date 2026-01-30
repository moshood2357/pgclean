"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Website Development",
      desc: "High-performance, responsive websites built for impact and scalability.",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Robust online stores engineered to drive sales and growth.",
    },
    {
      title: "UI/UX Design",
      desc: "Intuitive digital experiences crafted for performance and engagement.",
    },
    {
      title: "SEO & Optimization",
      desc: "Strategic visibility that drives measurable traffic and results.",
    },
    {
      title: "Website Maintenance",
      desc: "Ongoing support to keep your digital presence at its peak.",
    },
    {
      title: "Custom Digital Solutions",
      desc: "Tailored platforms built around your unique business needs.",
    },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        className="bg-white fixed w-full z-50 shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex justify-between items-center">
          {/* Logo */}
          <div className="text-[#0B1F3B] font-bold text-xl md:text-2xl">
            Vertex Digital
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center text-slate-700 font-medium">
            <a href="#about" className="hover:text-[#C6A75E] transition">
              About
            </a>
            <a href="#services" className="hover:text-[#C6A75E] transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#C6A75E] transition">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-[#C6A75E] transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-[#C6A75E] text-[#0B1F3B] px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              Request a Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#0B1F3B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= HERO ================= */}
      <section className="relative bg-linear-to-b from-[#0B1F3B] via-[#0B1F3B]/90 to-[#0B1F3B] text-white overflow-hidden pt-28 md:pt-32">
        {/* Abstract Background Shape */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-[#C6A75E]/10 rounded-full blur-3xl -z-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Engineering Digital Excellence for Ambitious Brands
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              We design and develop high-performance digital platforms that
              position your business at the top of its industry.
            </p>
            <div className="flex gap-4">
              <Link
                href="#contact"
                className="bg-[#C6A75E] text-[#0B1F3B] px-6 py-3 font-medium rounded-md hover:scale-105 transition transform"
              >
                Request a Consultation
              </Link>
              <Link
                href="#portfolio"
                className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0B1F3B] transition"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <div className="">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src="/landscape.png"
                alt="Professional carpet cleaning team"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ================= TRUST STRIP ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-8">
          {[
            { num: "50+", label: "Projects Delivered" },
            { num: "98%", label: "Client Satisfaction" },
            { num: "24/7", label: "Ongoing Support" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-[#0B1F3B]">
                {item.num}
              </h3>
              <p className="text-slate-600">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ================= ABOUT ================= */}
      <section id="about" className="py-32">
        <motion.div
          className="max-w-5xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B] mb-6 tracking-tight">
            Digital at Its Peak
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            At Vertex Digital, we don’t just build websites — we engineer
            digital experiences that drive growth, performance, and authority.
            Our approach blends strategic thinking, modern technology, and
            refined design to create scalable digital solutions.
          </p>
        </motion.div>
      </section>
      {/* ================= SERVICES ================= */}
      <section id="services" className="py-32 bg-slate-50 relative">
        {/* Skewed top divider */}
        <div className="absolute top-0 left-0 w-full h-16 bg-slate-50 -skew-y-3 -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#0B1F3B] mb-16 tracking-tight">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-[#0B1F3B] mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PORTFOLIO ================= */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1F3B] mb-16 tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="h-64 bg-slate-200 rounded-xl relative overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.2 }}
              >
                <div className="absolute inset-0 bg-[#0B1F3B]/70 opacity-0 group-hover:opacity-80 transition flex items-center justify-center text-white font-semibold text-lg">
                  Project {item} • Result Driven
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section
        id="contact"
        className="bg-[#0B1F3B] text-white py-32 text-center relative overflow-hidden"
      >
        <motion.div
          className="max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-slate-300 mb-8 text-lg md:text-xl">
            Partner with Vertex Digital and position your brand at its peak.
          </p>
          <Link
            href="#"
            className="bg-[#C6A75E] text-[#0B1F3B] px-8 py-4 rounded-md font-medium hover:scale-105 transition transform"
          >
            Schedule a Consultation
          </Link>
        </motion.div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Vertex Digital
            </h3>
            <p className="text-slate-400">Digital at Its Peak.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul>
              {services.map((s, idx) => (
                <li key={idx} className="hover:text-[#C6A75E] transition">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul>
              <li className="hover:text-[#C6A75E] transition">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[#C6A75E] transition">
                <a href="#services">Services</a>
              </li>
              <li className="hover:text-[#C6A75E] transition">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="hover:text-[#C6A75E] transition">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>Email: contact@vertexdigital.com</p>
            <p>Phone: +234 XXX XXX XXXX</p>
          </div>
        </div>
        <div className="text-center mt-12 text-slate-500">
          © {new Date().getFullYear()} Vertex Digital. All rights reserved.
        </div>
      </footer>
    </>
  );
}
