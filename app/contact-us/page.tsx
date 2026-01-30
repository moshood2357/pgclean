"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Message sent successfully! We'll be in touch shortly.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

    return (
      <div className="">
        <Heading />

        {/* main content */}
        <section className="py-20 bg-linear-to-r from-blue-50 via-white to-indigo-100 overflow-hidden min-h-screen">
          {/* Background Glow Effects */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.15 }}
              className="text-center mb-20"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
              >
                Get Your Free Quote
              </motion.h2>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-600 max-w-2xl mx-auto"
              >
                Contact us today for a free consultation. No obligation, no
                pressure.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>

                  <Card className="relative p-10 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block text-gray-700">
                            Full Name
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <label className="text-sm font-medium mb-2 block text-gray-700">
                            Email
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block text-gray-700">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          required
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium mb-2 block text-gray-700">
                          Message
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your cleaning needs..."
                          required
                          rows={4}
                          className="resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-12 rounded-xl bg-linear-to-r from-[#4CD1FE] to-[#41bae2] hover:from-[#41bae2] hover:to-[#52bfe4] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isLoading ? "Sending..." : "Send Message"}
                        {!isLoading && (
                          <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        )}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        We respect your privacy. Your information is safe with
                        us.
                      </p>
                    </form>
                  </Card>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+47926961792",
                    sub: "Available Mon-Fri, 8am-6pm",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "pgcleanlimited@gmail.com",
                    sub: "Response within 2 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Maps",
                    content:
                      "Princess Elizabeth Way, Cheltenham GL51 7BT, United Kingdom",
                    sub: "Serving the greater metro area",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white/90 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/40"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#4CD1FE]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#4CD1FE] font-medium">
                          {item.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">{item.sub}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
}
