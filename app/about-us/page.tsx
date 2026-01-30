"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Heading";
import Footer from "@/components/Footer";

import { Card } from "@/components/ui/card";

export default function AboutPage() {
    return (
      <div className="">
        {/* head section */}
        <Header />

        <section className="py-20 bg-linear-to-r from-blue-50 via-white to-indigo-100 overflow-hidden min-h-screen">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
            {/* Page Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                About PG Clean Ltd.
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether it is a single room or a full property, you can trust PG Clean to leave your carpet & upholstery fresh, clean & hygienic.
              </p>
            </motion.div>

            {/* Content */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Story
                  </h3>
                  <p className="text-gray-600 mb-2">
                    PG Clean has been in the carpet cleaning industry for
                    over 10 years. We serve homes and offices with the highest
                    standards of quality and care.
                  </p>
                  <p className="text-gray-600">
                    Our dedicated team uses state-of-the-art equipment and
                    eco-friendly products to ensure every space is clean, safe,
                    and refreshed.
                  </p>
                </Card>

                <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Our Mission & Vision
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Mission: To provide reliable, eco-friendly carpet cleaning
                    services that enhance the health and comfort of every space.
                  </p>
                  <p className="text-gray-600">
                    Vision: To become the most trusted and recognized carpet
                    cleaning company in the UK.
                  </p>
                </Card>

                <Card className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    Why Choose Us
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Experienced, certified cleaning professionals</li>
                    <li>Eco-friendly and safe cleaning products</li>
                    <li>Fast, efficient, and affordable services</li>
                    <li>100% satisfaction guarantee</li>
                    <li>Serving residential and commercial clients</li>
                  </ul>
                </Card>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-0 border-border bg-card overflow-hidden shadow-lg">
                  <img
                    src="/interior.jpg" 
                    alt="CleanCarpet Team"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* footer section */}
        <Footer />
      </div>
    );
}
