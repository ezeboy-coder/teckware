"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, LineChart, PieChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AnalyticsSolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          alt="Analytics Dashboard"
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
                <h1 className="text-5xl font-bold mb-6">Analytics Platform</h1>
                <p className="text-xl text-blue-100">
                  Transform your data into actionable insights with our comprehensive analytics solution.
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
                <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Real-time Analytics</h3>
                <p className="text-gray-600">Monitor performance metrics as they happen</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <LineChart className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Predictive Insights</h3>
                <p className="text-gray-600">Forecast trends with AI-powered analytics</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <PieChart className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Custom Reports</h3>
                <p className="text-gray-600">Generate detailed reports tailored to your needs</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Transform Your Data Strategy</h2>
              <p className="text-gray-600 mb-6">
                Our Analytics Platform provides comprehensive tools for data analysis and visualization, 
                enabling businesses to make informed decisions based on real-time insights. With advanced 
                machine learning capabilities, you can predict trends and identify opportunities before 
                they emerge.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li>Real-time data processing and visualization</li>
                  <li>Custom dashboard creation with drag-and-drop functionality</li>
                  <li>Advanced predictive analytics using machine learning</li>
                  <li>Automated report generation and scheduling</li>
                  <li>Integration with major data sources and APIs</li>
                  <li>Role-based access control for secure data sharing</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Our Analytics Platform?</h3>
              <p className="text-gray-600 mb-6">
                Our platform stands out with its intuitive interface, powerful backend processing, 
                and comprehensive feature set. Whether you're tracking KPIs, analyzing customer behavior, 
                or forecasting trends, we provide the tools you need to stay ahead of the competition.
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
