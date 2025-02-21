'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { EmailJSResponseStatus } from '@emailjs/browser';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_aea8657',
        'template_8spuzlc',
        e.currentTarget,
        'TtNE8Ry0jPB-uKEtf'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', result);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error);
          setSuccessMessage('Oops! Something went wrong, please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-20 p-10 rounded-2xl bg-gradient-to-r from-gray-800/50 to-transparent backdrop-blur-lg border border-gray-700/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e40af_0%,transparent_70%)] opacity-40"></div>
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-gradient">
              Let's Connect
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Ready to bring your vision to life? Let's collaborate and create something extraordinary together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-8 backdrop-blur-lg bg-gray-800/20 p-8 rounded-2xl border border-gray-700/30">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Contact Details
              </h2>

              <div className="space-y-6">
                <a
                  href="mailto:tevinowino65@gmail.com"
                  className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-blue-400">Email</p>
                    <p className="text-gray-300">tevinowino65@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+254794830280"
                  className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-700/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-cyan-400">Phone</p>
                    <p className="text-gray-300">+254794830280</p>
                  </div>
                </a>

                <div className="flex items-center gap-6 p-4 rounded-xl bg-gray-800/30">
                  <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-teal-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-teal-400">Location</p>
                    <p className="text-gray-300">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-lg bg-gray-800/20 p-8 rounded-2xl border border-gray-700/30">
              <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Social Links
              </h2>
              <div className="flex gap-6">
                <Link
                  href="https://github.com/tevinowino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-7 h-7 text-blue-400" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tevin-owino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center hover:bg-cyan-500/30 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-7 h-7 text-cyan-400" />
                </Link>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-gray-800/20 p-8 rounded-2xl border border-gray-700/30">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email', 'phone', 'subject'].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field as keyof FormData]}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-100 placeholder-gray-500 transition-all duration-300"
                    placeholder={`Enter your ${field}`}
                    required
                  />
                </div>
              ))}

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
                  className="w-full px-4 py-3 bg-gray-700/30 border border-gray-600/30 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-100 placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex gap-3 items-center justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
            {successMessage && (
              <div className="mt-6 p-4 rounded-xl bg-green-500/20 text-green-400 text-center">
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
