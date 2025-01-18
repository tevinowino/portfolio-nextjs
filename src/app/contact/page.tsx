'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS SDK
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

  const [isSending, setIsSending] = useState<boolean>(false); // Track submission status
  const [successMessage, setSuccessMessage] = useState<string>(''); // Success message

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // Set sending status to true

    // Call EmailJS service to send the email
    emailjs
      .sendForm(
        'service_aea8657', // Replace with your service ID
        'template_8spuzlc', // Replace with your template ID
        e.currentTarget, // The form element
        'TtNE8Ry0jPB-uKEtf' // Replace with your user ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', result);
          setSuccessMessage('Your message has been sent successfully!');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Reset form
        },
        (error) => {
          console.error('Error sending email:', error);
          setSuccessMessage('Oops! Something went wrong, please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false); // Reset sending status after request completion
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
              Have a project in mind? We can discuss how we can work together to bring your ideas to life.
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
                  href="mailto:tevinowino65@gmail.com"
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
                  href="tel:+254794830280"
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
                <Link
                  href="https://github.com/tevinowino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tevin-owino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-gray-300 hover:text-blue-400 hover:bg-blue-900/50 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
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
                    className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors"
                    placeholder={`Your ${field}`}
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
                  className="w-full px-4 py-3 bg-gray-800/50 border border-blue-900/30 rounded-lg focus:outline-none focus:border-blue-500 text-gray-100 placeholder-gray-500 transition-colors resize-none"
                  placeholder="Your message"
                  required
                />
              </div>

              <button type="submit" className="btn" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
            {successMessage && <p className="mt-4 text-center text-gray-300">{successMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
