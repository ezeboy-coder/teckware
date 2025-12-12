"use client";

import { motion } from "framer-motion";
import { Award, Building2, Globe2, Users2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "15+" },
    { label: "Global Clients", value: "500+" },
    { label: "Team Members", value: "100+" },
    { label: "Countries Served", value: "30+" },
  ];

  const values = [
    {
      icon: <Users2 className="h-8 w-8" />,
      title: "Customer First",
      description: "We prioritize our clients' success in everything we do",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Delivering outstanding quality in every solution",
    },
    {
      icon: <Globe2 className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology",
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Integrity",
      description: "Building trust through transparent relationships",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-5xl font-bold mb-6">About Techware</h1>
              <p className="text-xl text-blue-100">
                We're on a mission to transform businesses through innovative
                technology solutions. Our commitment to excellence and cutting-edge
                technology drives everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our actions and shape our culture as we work
              to deliver exceptional value to our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
