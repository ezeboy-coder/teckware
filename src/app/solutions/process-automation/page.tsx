"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Workflow, Settings, Gauge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProcessAutomationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80"
          alt="Process Automation"
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
                <h1 className="text-5xl font-bold mb-6">Process Automation</h1>
                <p className="text-xl text-blue-100">
                  Transform your business operations with intelligent automation solutions.
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
                <Workflow className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Workflow Automation</h3>
                <p className="text-gray-600">Streamline business processes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Settings className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Smart Integration</h3>
                <p className="text-gray-600">Connect your business tools</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Gauge className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance Metrics</h3>
                <p className="text-gray-600">Track automation efficiency</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Intelligent Process Automation</h2>
              <p className="text-gray-600 mb-6">
                Our Process Automation solution helps businesses eliminate repetitive tasks 
                and streamline workflows. By combining RPA with AI capabilities, we enable 
                smart automation that adapts to your business needs.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li>Visual workflow designer</li>
                  <li>AI-powered document processing</li>
                  <li>Business rule engine</li>
                  <li>Enterprise system integration</li>
                  <li>Mobile-ready forms and approvals</li>
                  <li>Performance analytics</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Our Automation Solution?</h3>
              <p className="text-gray-600 mb-6">
                Our platform combines powerful automation capabilities with ease of use, 
                allowing businesses to quickly implement and scale their automation 
                initiatives while maintaining flexibility and control.
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
