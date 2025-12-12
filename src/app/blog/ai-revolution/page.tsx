"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Brain, Share2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AIRevolutionBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
          alt="AI in Business"
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
                <h1 className="text-5xl font-bold mb-6">
                  AI Revolution in Business Operations
                </h1>
                <div className="flex items-center text-blue-100">
                  <span>March 25, 2024</span>
                  <span className="mx-3">•</span>
                  <span>6 min read</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3">
            <motion.article
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Artificial Intelligence is fundamentally transforming how businesses operate, making processes more efficient and enabling data-driven decision-making at unprecedented scales. Let's explore how AI is revolutionizing various aspects of business operations.
              </p>

              <h2 className="text-2xl font-bold mb-4">Key Areas of AI Impact</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Brain className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Intelligent Automation</h3>
                  <p className="text-gray-600">
                    AI-powered automation handles complex tasks with human-like decision-making capabilities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Sparkles className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                  <p className="text-gray-600">
                    Advanced algorithms forecast trends and identify opportunities with remarkable accuracy.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Implementation Strategies</h2>
              <p className="mb-6">
                Successfully integrating AI into your business operations requires a strategic approach:
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>Identify high-impact areas for AI implementation</li>
                <li>Ensure data quality and accessibility</li>
                <li>Invest in proper AI infrastructure</li>
                <li>Train staff on AI tools and capabilities</li>
                <li>Monitor and optimize AI performance</li>
              </ol>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Case Study</h3>
                <p className="text-gray-700">
                  A mid-sized manufacturing company implemented AI-powered predictive maintenance, reducing equipment downtime by 45% and maintenance costs by 30% in the first year.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Benefits of AI Integration</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Enhanced Efficiency</h3>
                    <p className="text-gray-600">Automation of routine tasks allows teams to focus on strategic initiatives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Better Decision Making</h3>
                    <p className="text-gray-600">Data-driven insights lead to more informed business decisions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Improved Customer Experience</h3>
                    <p className="text-gray-600">AI-powered personalization enhances customer satisfaction and loyalty.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Looking Ahead</h2>
              <p className="mb-8">
                As AI technology continues to evolve, businesses that embrace these innovations will gain a significant competitive advantage. The key is to start implementation now and continuously adapt as new capabilities emerge.
              </p>
            </motion.article>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <div className="flex items-center justify-between">
                <Link
                  href="/blog"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back to Blog
                </Link>
                <button className="flex items-center text-gray-600 hover:text-blue-600">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Article
                </button>
              </div>
            </div>
          </div>

          <aside className="col-span-1">
            <div className="sticky top-8">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h3 className="font-semibold mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link
                    href="/blog/google-analytics"
                    className="block hover:text-blue-600"
                  >
                    Boost Your Sales with Google Analytics 4
                  </Link>
                  <Link
                    href="/blog/b2b-partnerships"
                    className="block hover:text-blue-600"
                  >
                    Building Strategic B2B Partnerships
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
