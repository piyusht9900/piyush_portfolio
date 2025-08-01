import React, { useRef, useState } from "react";
import { Mail, Github, Linkedin, User, MessageSquare, Send, Phone } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'Piyush1234',               // Service ID
        'template_nmm2brl',         // Template ID
        form.current,               // Form reference
        'gj5N8LFvjrQrqfTGa'         // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 text-left text-gray-900 dark:text-white bg-gradient-to-b from-blue-100 to-blue-100 dark:bg-none dark:bg-gray-900"
    >
      <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-transparent">
        {/* Left: Contact Info */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
  Whether you're a fellow developer, a recruiter, or someone with an idea, feel free to reach out — I'd love to connect and collaborate.
</p>

          <ul className="space-y-4 text-left">
            <li className="flex items-center gap-3"><Phone size={20} /> +91 9321581067</li>
            <li className="flex items-center gap-3"><Mail size={20} /> psthakur4520@gmail.com</li>
            <li className="flex items-center gap-3"><Github size={20} /> github.com/piyusht</li>
            <li className="flex items-center gap-3"><Linkedin size={20} /> linkedin.com/in/piyush-thakur-101650271</li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label className="text-sm font-medium mb-1 block">Message</label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                <textarea
                  name="message"
                  required
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-md transition-all"
            >
              Send Message <Send size={16} />
            </button>

            {isSent && <p className="text-green-500 font-medium text-center mt-4">Message sent successfully ✅</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
