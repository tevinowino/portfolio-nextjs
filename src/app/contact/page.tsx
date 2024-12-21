'use client'

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e40af_0%,transparent_70%)] opacity-30"></div>
          <div className="relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              
              <div className="space-y-4">
                <a 
                  href="mailto:contact@example.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">tevinowino65@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-900/50 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm">+254794830280</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Follow Me</h2>
              <div className="flex gap-4">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors"
                    placeholder="Project discussion"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors resize-none"
                    placeholder="Your message"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}