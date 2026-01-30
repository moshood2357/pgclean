// import Link from "next/link";
// "use client";
// import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <div>
      {/* Services Section */}
      <section className="bg-linear-to-r from-blue-50 via-white to-indigo-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            We provide complete carpet and upholstery cleaning services.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {["Deep Carpet Cleaning", "Upholstery Cleaning", "Rug Cleaning"].map(
            (service, index) => (
              <Card
                key={index}
                className="rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <CardContent className="p-6">
                  <CheckCircle className="mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    Professional equipment and eco‑safe cleaning products to
                    restore freshness and hygiene.
                  </p>
                </CardContent>
              </Card>
            ),
          )}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="bg-[#4CD1FE] text-white px-8 py-3 rounded-2xl font-semibold hover:bg-[#41bae2] transition"
          >
            See More
          </Link>
        </div>
      </section>
    </div>
  );
}
