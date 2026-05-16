import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

// ============================================================
// EMAILJS SETUP
// 1. Create a free account at https://www.emailjs.com/
// 2. Create an Email Service, Email Template, and get Public Key
// 3. Replace the values below:
// ============================================================
// import emailjs from '@emailjs/browser';
// const SERVICE_ID = 'your_service_id';
// const TEMPLATE_ID = 'your_template_id';
// const PUBLIC_KEY = 'your_public_key';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'anuragtiwari0132@gmail.com',
    href: 'mailto:anuragtiwari0132@gmail.com',
    color: 'text-violet-400',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+91 XXXXXXXXXX', // TODO: Replace with your number
    href: 'https://wa.me/91XXXXXXXXXX', // TODO: Replace
    color: 'text-green-400',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    href: null,
    color: 'text-pink-400',
  },
];

function InputField({ label, id, type = 'text', placeholder, value, onChange, required }) {
  const { isDark } = useTheme();
  return (
    <div>
      <label htmlFor={id} className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {label} {required && <span className="text-primary-400">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200
                    focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                    ${isDark
                      ? 'bg-dark-700 border-white/10 text-white placeholder-gray-600 hover:border-white/20'
                      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 hover:border-gray-300'
                    }`}
      />
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { isDark } = useTheme();

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsLoading(true);

    try {
      // ============================================================
      // TODO: Uncomment and configure EmailJS to enable email sending:
      //
      // await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      //
      // For now, simulating a successful send:
      // ============================================================
      await new Promise((res) => setTimeout(res, 1500));

      toast.success('Message sent! I\'ll get back to you soon. 🚀', {
        duration: 5000,
        style: {
          background: isDark ? '#1a1a2e' : '#fff',
          color: isDark ? '#e2e8f0' : '#1a202c',
          border: '1px solid rgba(99,102,241,0.3)',
        },
        iconTheme: { primary: '#6366f1', secondary: '#fff' },
      });
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      toast.error('Oops! Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 relative ${isDark ? 'bg-dark-800' : 'bg-white'}`}
    >
      <Toaster position="top-right" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb w-80 h-80 bg-violet-500" style={{ bottom: '0%', left: '20%', opacity: 0.06 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                          bg-green-500/10 border border-green-500/20 text-green-400">
            <MessageSquare size={14} />
            Get In Touch
          </div>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle mt-3">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
          <div className="section-divider mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div>
              <h3 className={`text-xl font-semibold font-heading mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Let's Have a Conversation
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm open to freelance projects, full-time opportunities, internships, collaborations,
                or even just a casual tech chat. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  className={`card ${isDark ? '' : 'card-light'} flex items-center gap-4`}
                  whileHover={{ x: 4 }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}
                                   ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className={`text-xs font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className={`text-sm font-semibold hover:text-primary-400 transition-colors ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {value}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <div className={`p-4 rounded-xl border ${
              isDark ? 'bg-green-500/5 border-green-500/20' : 'bg-green-50 border-green-200'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm currently open to freelance projects and full-time roles.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className={`card ${isDark ? '' : 'card-light'} space-y-5`}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Your Name"
                  id="contact-name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                />
                <InputField
                  label="Email Address"
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                />
              </div>

              <InputField
                label="Subject"
                id="contact-subject"
                placeholder="Project Collaboration, Hiring, Just Saying Hi..."
                value={form.subject}
                onChange={handleChange('subject')}
              />

              <div>
                <label htmlFor="contact-message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message <span className="text-primary-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hello! 👋"
                  value={form.message}
                  onChange={handleChange('message')}
                  required
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 resize-none
                              focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500
                              ${isDark
                                ? 'bg-dark-700 border-white/10 text-white placeholder-gray-600 hover:border-white/20'
                                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 hover:border-gray-300'
                              }`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-primary justify-center py-3.5 text-base ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
