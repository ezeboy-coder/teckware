"use client";

import { motion } from "framer-motion";
import { ArrowLeft, HandshakeIcon, Share2, Target, Users2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function B2BPartnershipsBlogPost() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-[400px] relative">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="B2B Partnership"
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
                  Building Strategic B2B Partnerships
                </h1>
                <div className="flex items-center text-blue-100">
                  <span>March 22, 2024</span>
                  <span className="mx-3">•</span>
                  <span>5 min read</span>
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
                Strategic B2B partnerships can significantly accelerate business growth and create mutual value. In this article, we'll explore the key elements of building and maintaining successful B2B partnerships in today's dynamic business environment.
              </p>

              <h2 className="text-2xl font-bold mb-4">Partnership Fundamentals</h2>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <HandshakeIcon className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Mutual Value Creation</h3>
                  <p className="text-gray-600">
                    Successful partnerships are built on creating value for all parties involved.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Target className="h-8 w-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold mb-2">Strategic Alignment</h3>
                  <p className="text-gray-600">
                    Partners should share compatible goals and vision for long-term success.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Building Strong Partnerships</h2>
              <p className="mb-6">
                Follow these essential steps to establish lasting B2B partnerships:
              </p>
              <ol className="list-decimal pl-6 mb-8 space-y-4">
                <li>Identify potential partners with complementary strengths</li>
                <li>Conduct thorough due diligence</li>
                <li>Establish clear communication channels</li>
                <li>Define partnership goals and metrics</li>
                <li>Create formal agreements and governance structures</li>
              </ol>

              <div className="bg-blue-50 p-8 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4">Success Story</h3>
                <p className="text-gray-700">
                  Two mid-sized software companies partnered to combine their expertise in AI and cybersecurity, resulting in a 40% increase in market share for both companies within 18 months.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4">Key Success Factors</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Clear Communication</h3>
                    <p className="text-gray-600">Regular updates and transparent sharing of information build trust.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Resource Allocation</h3>
                    <p className="text-gray-600">Dedicated teams and resources ensure partnership success.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users2 className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h3 className="font-semibold mb-2">Performance Monitoring</h3>
                    <p className="text-gray-600">Regular review of partnership metrics and adjustments as needed.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
              <p className="mb-8">
                Strategic B2B partnerships are powerful drivers of growth when properly executed. Focus on building strong foundations and maintaining open communication to ensure long-term success.
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
                    href="/blog/ai-revolution"
                    className="block hover:text-blue-600"
                  >
                    AI Revolution in Business Operations
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
