"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Cloud, Database, Globe, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CloudSolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="Cloud Infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6">Cloud Infrastructure</h1>
                <p className="text-xl text-blue-100">
                  Scale your business with our secure and reliable cloud solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Cloud className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Scalable Infrastructure</h3>
                <p className="text-gray-600">Grow your resources as needed</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Advanced protection for your data</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-gray-600">Worldwide infrastructure presence</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Enterprise-Grade Cloud Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our cloud infrastructure provides a robust foundation for your digital transformation 
                journey. With high-performance computing resources and automatic scaling capabilities, 
                your applications will always perform at their best, regardless of load.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li>High-performance computing with automatic scaling</li>
                  <li>Global content delivery network (CDN)</li>
                  <li>Disaster recovery and backup solutions</li>
                  <li>Multi-region deployment options</li>
                  <li>Container orchestration and microservices support</li>
                  <li>24/7 infrastructure monitoring</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Our Cloud Infrastructure?</h3>
              <p className="text-gray-600 mb-6">
                Built with reliability and security in mind, our cloud infrastructure ensures your 
                applications run smoothly while maintaining compliance with industry standards. We handle 
                the complexity of cloud management, allowing you to focus on your core business objectives.
              </p>

              <div className="mt-12 flex items-center justify-between">
                <Link
                  href="/solutions"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Solutions
                </Link>
                <Link
                  href="/consultation"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
