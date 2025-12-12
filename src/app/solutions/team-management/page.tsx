"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Users, MessageSquare, Calendar, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          alt="Team Collaboration"
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
                <h1 className="text-5xl font-bold mb-6">Team Management</h1>
                <p className="text-xl text-blue-100">
                  Empower your teams with collaborative tools for seamless coordination and productivity.
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
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600">Real-time collaboration tools</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Project Planning</h3>
                <p className="text-gray-600">Efficient resource management</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Goal Tracking</h3>
                <p className="text-gray-600">Monitor team performance</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Streamline Team Coordination</h2>
              <p className="text-gray-600 mb-6">
                Our Team Management solution provides comprehensive tools for effective team 
                collaboration and project management. From task assignment to performance 
                tracking, we help teams stay productive and aligned with business goals.
              </p>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li>Project planning and task management</li>
                  <li>Real-time collaboration tools</li>
                  <li>Time tracking and resource allocation</li>
                  <li>Performance analytics and reporting</li>
                  <li>Team communication platform</li>
                  <li>Document sharing and version control</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mb-4">Why Choose Our Team Management Solution?</h3>
              <p className="text-gray-600 mb-6">
                Designed with flexibility in mind, our platform adapts to your team's workflow 
                while providing the structure needed for efficient project delivery. From small 
                teams to large departments, we help organizations maximize productivity.
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
