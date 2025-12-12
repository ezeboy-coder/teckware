"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Shield, Users2, AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SecuritySolutionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
          alt="Security Infrastructure"
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
                <h1 className="text-5xl font-bold mb-6">Security Suite</h1>
                <p className="text-xl text-blue-100">
                  Enterprise-grade security solutions to protect your business assets and data.
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
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Advanced Protection</h3>
                <p className="text-gray-600">Multi-layered security architecture</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Lock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Encryption</h3>
                <p className="text-gray-600">End-to-end encryption for all data</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <AlertTriangle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Threat Detection</h3>
                <p className="text-gray-600">Real-time monitoring and alerts</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Enterprise Security Solutions</h2>
              <p className="text-gray-600 mb-6">
                Our comprehensive security suite provides enterprise-grade protection for your 
                digital assets. With advanced threat detection and prevention capabilities, 
                your business stays protected against evolving cyber threats.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li>Advanced threat detection and prevention</li>
                  <li>Real-time security monitoring and alerts</li>
                  <li>Automated vulnerability scanning</li>
                  <li>Zero-trust architecture implementation</li>
                  <li>Compliance management and reporting</li>
                  <li>Security awareness training programs</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Our Security Suite?</h3>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, security is paramount. Our solution combines 
                cutting-edge technology with best practices to create a robust security 
                posture that adapts to evolving threats while ensuring business continuity.
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
