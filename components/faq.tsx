"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does carpet cleaning take?",
    answer:
      "Most residential carpet cleaning jobs take between 2-4 hours depending on the size of your home and the extent of cleaning needed. Our team will provide a time estimate during your free consultation.",
  },
  {
    question: "Is your cleaning safe for pets and children?",
    answer:
      "Yes! We use eco-friendly, non-toxic cleaning solutions that are completely safe for pets, children, and the environment. Our products are certified and tested for safety.",
  },
  {
    question: "How soon can you schedule my cleaning?",
    answer:
      "We typically offer appointments within 2-3 days. For urgent requests, we may be able to accommodate same-day or next-day service depending on availability. Contact us for details.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, credit cards (Visa, Mastercard, American Express), and online payments. Invoicing is also available for commercial clients.",
  },
  {
    question: "Do you offer any guarantees?",
    answer:
      "We offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll return and re-clean at no additional cost.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We service the greater metropolitan area and surrounding regions within a 30-mile radius. Contact us to confirm service availability for your specific location.",
  },
  {
    question: "How often should I have my carpets cleaned?",
    answer:
      "We recommend professional cleaning every 12-18 months for residential homes. High-traffic areas may benefit from more frequent cleaning. We can recommend a maintenance schedule for your specific situation.",
  },
  {
    question: "Do you offer commercial cleaning services?",
    answer:
      "Yes! We specialize in commercial carpet cleaning with flexible scheduling to minimize disruption to your business. We offer maintenance plans and bulk discounts for regular service.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#4CD1FE] mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border bg-card rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="px-6 py-4 text-foreground hover:text-primary transition-colors">
                  <span className="text-left font-heading font-bold">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-primary/5 rounded-lg text-center border border-primary/10"
        >
          <p className="text-foreground mb-2">Still have questions?</p>
          <a
            href="/contact-us"
            className="inline-block text-[#4CD1FE] font-bold hover:text-[#41bae2] transition-smooth"
          >
            Contact our team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
