"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@techconsult.com',
      link: 'mailto:hello@techconsult.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our main office',
      value: '123 Tech Street, Silicon Valley, CA 94000',
      link: 'https://maps.google.com'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'Cloud Migration',
    'Digital Transformation',
    'Data Analytics',
    'Cybersecurity',
    'AI/ML Solutions',
    'Other'
  ];

  const budgetRanges = [
    '$10K - $25K',
    '$25K - $50K',
    '$50K - $100K',
    '$100K - $250K',
    '$250K+'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Build Something <span className="text-blue-400">Amazing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our team of experts 
              and let&apos;s discuss how we can bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div                 className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 text-center group hover:bg-slate-700/50 hover:border-blue-400/30 transition-all duration-300 shadow-lg">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{info.description}</p>
                  <p className="text-blue-400 font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Your Project
              </h2>
              <p className="text-gray-300">
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            {isSubmitted && (
              <motion.div
                className="bg-green-500/20 border border-green-400/50 rounded-lg p-4 mb-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-green-400">
                  Thank you! Your message has been sent successfully. We&apos;ll be in touch soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    {...register('name')}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    {...register('email')}
                    type="email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Company Name *
                  </label>
                  <Input
                    {...register('company')}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Your Company"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input
                    {...register('phone')}
                    type="tel"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    {...register('projectType')}
                    className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-800">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Budget Range *
                  </label>
                  <select
                    {...register('budget')}
                    className="w-full h-10 px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-slate-800">
                        {range}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-red-400 text-sm mt-1">{errors.budget.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Project Description *
                </label>
                <Textarea
                  {...register('message')}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                  placeholder="Tell us about your project requirements, goals, and any specific technical needs..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Response Time Info */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Quick Response</h3>
              <p className="text-gray-300">
                We respond to all inquiries within 24 hours, ensuring you get the information you need quickly.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Free Consultation</h3>
              <p className="text-gray-300">
                Schedule a free consultation call to discuss your project requirements and get expert advice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
