
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xzddpyyy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _to: 'jshvatskaya@gmail.com'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    if (status === 'error') setStatus('idle');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 bg-[#25252d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#a0a0a5] uppercase tracking-widest text-xs font-bold flex items-center mb-6">
                <span className="w-8 h-[1px] bg-[#a0a0a5] mr-3"></span>
                Get In Touch
              </p>
              <h2 className="text-5xl font-extrabold text-white tracking-tighter mb-12">Let’s build <br />something solid.</h2>
              <p className="text-[#a0a0a5] text-lg leading-relaxed mb-12 max-w-md">
                If you need a senior engineer who can own systems end-to-end — from architecture to production — I’d be happy to talk.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase tracking-widest text-[#fec13d]">Direct Email</p>
                <a href="mailto:jshvatskaya@gmail.com" className="text-2xl font-bold text-white hover:text-[#fec13d] transition-colors">
                  jshvatskaya@gmail.com
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1d1d24] p-8 md:p-12 border border-white/5"
            >
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-[#fec13d] text-black rounded-full flex items-center justify-center mx-auto mb-8">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-4">Message Received</h3>
                    <p className="text-[#a0a0a5] mb-10">Thank you for reaching out. I'll get back to you shortly.</p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[#fec13d] font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-[#a0a0a5]">Name</label>
                        <input
                          required
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[#fec13d] transition-colors placeholder:text-white/20"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-[#a0a0a5]">Email</label>
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[#fec13d] transition-colors placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-[#a0a0a5]">Subject</label>
                      <input
                        required
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[#fec13d] transition-colors placeholder:text-white/20"
                        placeholder="Project inquiry"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-[#a0a0a5]">Message</label>
                      <textarea
                        required
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-4 text-white focus:outline-none focus:border-[#fec13d] transition-colors placeholder:text-white/20 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-12">
                      <button
                        disabled={status === 'submitting'}
                        type="submit"
                        className="group flex items-center space-x-4 text-[#fec13d] text-lg font-bold"
                      >
                        <span className="border-b-2 border-[#fec13d] pb-1 group-hover:border-[#fec13d]/100 transition-all">
                          {status === 'submitting' ? 'Sending...' : 'Send Message'}
                        </span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        onClick={handleClear}
                        className="text-[#a0a0a5] text-sm font-bold uppercase tracking-widest hover:text-white transition-colors text-left"
                      >
                        Clear Form
                      </button>
                    </div>

                    {status === 'error' && (
                      <p className="text-red-400 text-xs font-bold uppercase tracking-widest">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
