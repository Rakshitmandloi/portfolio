"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield, Rocket, Cloud, Users, Bot, ShoppingCart, Database, Server, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration (you'll need to set up your EmailJS account)
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result.text);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Enterprise-grade software solutions built by top 1% engineers from leading tech companies',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent automation and machine learning solutions that transform business operations',
    },
    {
      icon: Cloud,
      title: 'Cloud Management',
      description: 'Scalable cloud infrastructure and DevOps solutions with our own proven infrastructure',
    },
    {
      icon: Users,
      title: 'CRM Solutions',
      description: 'Customer relationship management systems that drive sales and enhance customer experience',
    },
    {
      icon: ShoppingCart,
      title: 'Marketplace Solutions',
      description: 'End-to-end e-commerce and marketplace platforms with advanced payment integrations',
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Enterprise security frameworks leveraging expertise from top-tier security companies',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data processing, analytics pipelines, and real-time data solutions at scale',
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Complete business modernization with cutting-edge technology and proven methodologies',
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Primary floating gradient orbs with scroll-based animation */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            top: '10vh',
            left: '10vw',
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 120, 0],
            scale: [1, 1.3, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl"
          style={{
            bottom: '15vh',
            right: '15vw',
          }}
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [1, 0.6, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3,
          }}
        />
        
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
          style={{
            top: '50vh',
            left: '70vw',
          }}
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 80, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 7,
          }}
        />

        {/* Scroll-triggered floating tech icons */}
        <motion.div
          className="absolute w-16 h-16 bg-blue-500/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
          style={{
            top: '20vh',
            right: '20vw',
          }}
          animate={{
            y: [0, -40, 20, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Rocket size={24} className="text-blue-400/60" />
        </motion.div>
        
        <motion.div
          className="absolute w-14 h-14 bg-green-500/10 backdrop-blur-lg rounded-2xl flex items-center justify-center"
          style={{
            bottom: '30vh',
            left: '25vw',
          }}
          animate={{
            y: [0, 35, -15, 0],
            rotate: [0, -20, 20, 0],
            scale: [1, 0.7, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        >
          <Shield size={20} className="text-green-400/60" />
        </motion.div>
        
        <motion.div
          className="absolute w-12 h-12 bg-purple-500/10 backdrop-blur-lg rounded-xl flex items-center justify-center"
          style={{
            top: '60vh',
            right: '10vw',
          }}
          animate={{
            x: [0, -30, 25, 0],
            y: [0, -20, 25, 0],
            rotate: [0, 25, -25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 8,
          }}
        >
          <Code size={18} className="text-purple-400/60" />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 bg-orange-500/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
          style={{
            top: '40vh',
            left: '5vw',
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
        >
          <Database size={16} className="text-orange-400/60" />
        </motion.div>

        <motion.div
          className="absolute w-8 h-8 bg-cyan-500/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
          style={{
            bottom: '20vh',
            right: '40vw',
          }}
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 25, -35, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 12,
          }}
        >
          <Zap size={14} className="text-cyan-400/60" />
        </motion.div>

        {/* Subtle floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${20 + i * 10}vh`,
              left: `${10 + i * 8}vw`,
            }}
            animate={{
              y: [0, -20 - i * 5, 15 + i * 3, 0],
              opacity: [0.3, 0.8, 0.2, 0.3],
              scale: [1, 1.5, 0.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}

        {/* Additional gradient layers that respond to scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-green-900/3 to-transparent"
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 10,
          }}
        />
      </div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming Ideas Into{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Digital Reality
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elite engineering team from <span className="text-blue-400 font-semibold">top tech companies</span> delivering 
              enterprise-grade solutions. <span className="text-purple-400 font-semibold">Top 1% engineers</span> trusted by Fortune 500 companies worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="gradient"
                size="lg"
                className="group text-lg px-8 py-6"
                asChild
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 pt-32">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade solutions delivered by top 1% engineers from premier institutions like BITS Pilani. 
              Our team ranks in top 50 on coding platforms and operates with proven infrastructure for maximum reliability.
            </p>
            
            {/* Team Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center items-center gap-8 mb-12"
            >
              <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-lg rounded-xl px-6 py-3 border border-slate-700/50">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Server size={16} className="text-white" />
                </div>
                <span className="text-gray-300 font-medium">Top 1% Engineers</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-lg rounded-xl px-6 py-3 border border-slate-700/50">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Cloud size={16} className="text-white" />
                </div>
                <span className="text-gray-300 font-medium">Elite Tech Companies</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-lg rounded-xl px-6 py-3 border border-slate-700/50">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Database size={16} className="text-white" />
                </div>
                <span className="text-gray-300 font-medium">Top 50 LeetCode</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-slate-700/50 h-full transition-all duration-300 group-hover:bg-slate-700/50 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 bg-slate-800/20">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Meet Our <span className="text-purple-400">Founding Team</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Led by visionary engineers from top tech companies and premier institutions, 
              our founding team brings decades of experience in building enterprise-grade solutions 
              that transform businesses worldwide.
            </p>
          </motion.div>

          {/* Founders Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-20">
            {/* Founder 1 - Rakshit */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-3xl border border-slate-600/50 overflow-hidden group hover:border-blue-400/50 transition-all duration-500"
            >
              {/* Photo Section */}
              <div className="relative h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Profile Photo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D4D03AQExUwxb1P0HLA/profile-displayphoto-shrink_200_200/B4DZPK1y9xG0AY-/0/1734274921468?e=1757548800&v=beta&t=mjhFwUhqGE1HAKBn9ofGm-4DSduthcbevyzHs7US3Ho" 
                      alt="Rakshit" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute top-8 left-8 w-12 h-12 bg-blue-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Cloud size={20} className="text-blue-300" />
                </motion.div>
                <motion.div
                  className="absolute top-8 right-8 w-12 h-12 bg-purple-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Code size={20} className="text-purple-300" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Shield size={20} className="text-green-300" />
                </motion.div>

                {/* Role Badge */}
                <div className="absolute bottom-6 right-6">
                  <span className="bg-blue-500/20 backdrop-blur-lg text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                    Co-Founder & CTO
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Rakshit Mandloi</h3>
                  <p className="text-purple-400 font-semibold text-lg">Co-Founder & Chief Technology Officer</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3"></div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  Computer Science and Economics graduate from BITS Pilani with expertise in full-stack development 
                  and enterprise software solutions. Currently working at a leading product-based company that hires 
                  top 1% engineers, bringing cutting-edge technical expertise to our consultancy.
                </p>

                <div className="space-y-6 mb-8">
                  <h4 className="text-xl font-semibold text-blue-400 flex items-center">
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <Rocket size={12} className="text-white" />
                    </div>
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { text: "Computer Science & Economics graduate from BITS Pilani", highlight: true },
                      { text: "Built global CRM solution for QA department at Nomura", highlight: false },
                      { text: "Working at leading product company hiring top 1% engineers", highlight: false },
                      { text: "Enterprise software solutions architect", highlight: false },
                      { text: "Full-stack development expertise with modern tech stack", highlight: false }
                    ].map((achievement, index) => (
                      <motion.div
                        key={achievement.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                          achievement.highlight 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 shadow-lg shadow-blue-500/10' 
                            : 'bg-blue-500/5 hover:bg-blue-500/10'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          achievement.highlight ? 'bg-blue-300 shadow-lg shadow-blue-400/50' : 'bg-blue-400'
                        }`}></div>
                        <span className={`${
                          achievement.highlight 
                            ? 'text-white font-semibold' 
                            : 'text-gray-300'
                        }`}>
                          {achievement.highlight ? (
                            <span>
                              Computer Science & Economics graduate from{' '}
                              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                BITS Pilani
                              </span>
                            </span>
                          ) : (
                            achievement.text
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-400">Technical Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Full-Stack Development', 'Enterprise Software', 'CRM Solutions', 'Cloud Architecture', 'System Design', 'Product Development', 'QA Automation'].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium text-blue-300 bg-blue-500/20 px-4 py-2 rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Founder 2 - Harshit Bansal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 backdrop-blur-lg rounded-3xl border border-slate-600/50 overflow-hidden group hover:border-green-400/50 transition-all duration-500"
            >
              {/* Photo Section */}
              <div className="relative h-80 bg-gradient-to-br from-green-500/30 to-blue-600/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                
                {/* Profile Photo */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQFdIqH9GtiwDQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692007932769?e=1757548800&v=beta&t=Z0wgJhqLMjg8xnuKqZRDOGhYA83rMbpDXOMP82G1uSg" 
                      alt="Harshit Bansal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Business Icons */}
                <motion.div
                  className="absolute top-8 left-8 w-12 h-12 bg-green-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Shield size={20} className="text-green-300" />
                </motion.div>
                <motion.div
                  className="absolute top-8 right-8 w-12 h-12 bg-blue-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Database size={20} className="text-blue-300" />
                </motion.div>
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-500/30 backdrop-blur-lg rounded-xl flex items-center justify-center"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <Zap size={20} className="text-purple-300" />
                </motion.div>

                {/* Role Badge */}
                <div className="absolute bottom-6 right-6">
                  <span className="bg-green-500/20 backdrop-blur-lg text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-400/30">
                    Co-Founder & CEO
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Harshit Bansal</h3>
                  <p className="text-green-400 font-semibold text-lg">Co-Founder & Chief Executive Officer</p>
                  <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-3"></div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  Engineering optimized and seamless backend solutions at a network security leader, 
                  driven by a competitive programmer&apos;s mindset for achieving peak performance and efficiency. 
                  Expert in building scalable systems with a focus on security and performance optimization.
                </p>

                <div className="space-y-6 mb-8">
                  <h4 className="text-xl font-semibold text-green-400 flex items-center">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <Users size={12} className="text-white" />
                    </div>
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { text: "Top 50 India on leading competitive programming platforms", highlight: true },
                      { text: "Backend engineer at global network security leader", highlight: false },
                      { text: "Competitive programming champion with proven track record", highlight: false },
                      { text: "Expert in optimized and seamless backend solutions", highlight: false },
                      { text: "Performance-driven mindset for peak system efficiency", highlight: false }
                    ].map((achievement, index) => (
                      <motion.div
                        key={achievement.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                          achievement.highlight 
                            ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 shadow-lg shadow-green-500/10' 
                            : 'bg-green-500/5 hover:bg-green-500/10'
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          achievement.highlight ? 'bg-green-300 shadow-lg shadow-green-400/50' : 'bg-green-400'
                        }`}></div>
                        <span className={`${
                          achievement.highlight 
                            ? 'text-white font-semibold' 
                            : 'text-gray-300'
                        }`}>
                          {achievement.highlight ? (
                            <span>
                              <span className="font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                Top 50 India
                              </span>
                              {' '}on leading competitive programming platforms
                            </span>
                          ) : (
                            achievement.text
                          )}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-green-400">Technical Expertise</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Backend Engineering', 'Network Security', 'System Optimization', 'Competitive Programming', 'Performance Tuning', 'Scalable Architecture', 'Security Solutions'].map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium text-green-300 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 hover:bg-green-500/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Mission & Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/40 backdrop-blur-lg rounded-3xl p-12 border border-slate-600/30">
              <h3 className="text-3xl font-bold text-white mb-8">Our Shared Vision</h3>
              <p className="text-gray-300 text-xl leading-relaxed max-w-5xl mx-auto mb-12">
                Together, we&apos;re building a consultancy that bridges the gap between complex business challenges 
                and innovative technology solutions. Combining competitive programming excellence with enterprise 
                software expertise, we deliver scalable, secure, and optimized solutions for global businesses.
              </p>

              {/* Achievement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">Top 50</div>
                  <div className="text-gray-300">India Competitive Programming</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">Global</div>
                  <div className="text-gray-300">Enterprise Solutions</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">Top 1%</div>
                  <div className="text-gray-300">Engineers Network</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-orange-400 mb-2">BITS</div>
                  <div className="text-gray-300">Pilani Alumni</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 pt-32">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our portfolio of successful enterprise solutions that have transformed businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: 'Dynamic Cloud Apps',
                category: 'Cloud Infrastructure',
                description: 'Solution to dynamically deploy web apps without a build upgrade. Streamlined deployment process enabling rapid scaling and seamless updates for modern applications.',
                tech: ['React', 'Node.js', 'Docker', 'AWS'],
                image: '/placeholder-project-1.jpg'
              },
              {
                title: 'Global QA Management System',
                category: 'Enterprise CRM',
                description: 'React-based tool for managing test cycles used globally by QA teams. Features Flask backend with SQL database management and Material UI authentication.',
                tech: ['React', 'Flask', 'SQL', 'Material UI'],
                image: '/placeholder-project-2.jpg'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-slate-700/50 h-full transition-all duration-300 group-hover:bg-slate-700/50 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    
                    {/* Background Architecture Diagram for Dynamic Cloud Apps */}
                    {index === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg width="200" height="150" viewBox="0 0 200 150" className="text-blue-300">
                          {/* Cloud Infrastructure Diagram */}
                          <g>
                            {/* Main Cloud */}
                            <ellipse cx="100" cy="40" rx="35" ry="20" fill="currentColor" opacity="0.3"/>
                            <ellipse cx="85" cy="35" rx="25" ry="15" fill="currentColor" opacity="0.4"/>
                            <ellipse cx="115" cy="35" rx="25" ry="15" fill="currentColor" opacity="0.4"/>
                            
                            {/* Deployment Arrows */}
                            <path d="M 60 70 L 90 50" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                            <path d="M 140 70 L 110 50" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                            
                            {/* Docker Containers */}
                            <rect x="40" y="75" width="30" height="20" rx="3" fill="currentColor" opacity="0.4"/>
                            <rect x="130" y="75" width="30" height="20" rx="3" fill="currentColor" opacity="0.4"/>
                            
                            {/* Load Balancer */}
                            <rect x="85" y="100" width="30" height="15" rx="7" fill="currentColor" opacity="0.5"/>
                            
                            {/* Database */}
                            <ellipse cx="100" cy="130" rx="20" ry="8" fill="currentColor" opacity="0.4"/>
                            <rect x="80" y="122" width="40" height="8" fill="currentColor" opacity="0.4"/>
                          </g>
                        </svg>
                      </div>
                    )}
                    
                    {/* Background System Diagram for QA Management */}
                    {index === 1 && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <svg width="200" height="150" viewBox="0 0 200 150" className="text-green-300">
                          {/* QA Management System Diagram */}
                          <g>
                            {/* Frontend Layer */}
                            <rect x="30" y="20" width="140" height="25" rx="5" fill="currentColor" opacity="0.4"/>
                            <text x="100" y="37" textAnchor="middle" className="text-xs fill-current" opacity="0.8">React Frontend</text>
                            
                            {/* API Layer */}
                            <rect x="50" y="60" width="100" height="20" rx="3" fill="currentColor" opacity="0.5"/>
                            <text x="100" y="73" textAnchor="middle" className="text-xs fill-current" opacity="0.8">Flask API</text>
                            
                            {/* Connection Lines */}
                            <path d="M 100 45 L 100 60" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                            <path d="M 100 80 L 100 95" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                            
                            {/* Database Layer */}
                            <ellipse cx="100" cy="110" rx="30" ry="12" fill="currentColor" opacity="0.4"/>
                            <ellipse cx="100" cy="106" rx="30" ry="12" fill="currentColor" opacity="0.3"/>
                            <text x="100" y="112" textAnchor="middle" className="text-xs fill-current" opacity="0.8">SQL DB</text>
                            
                            {/* Side Components */}
                            <circle cx="35" cy="70" r="12" fill="currentColor" opacity="0.3"/>
                            <text x="35" y="75" textAnchor="middle" className="text-xs fill-current" opacity="0.8">Auth</text>
                            
                            <circle cx="165" cy="70" r="12" fill="currentColor" opacity="0.3"/>
                            <text x="165" y="75" textAnchor="middle" className="text-xs fill-current" opacity="0.8">UI</text>
                          </g>
                        </svg>
                      </div>
                    )}
                    
                    {/* Floating Tech Icons */}
                    <motion.div
                      className="absolute top-4 left-4 w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {index === 0 ? <Cloud size={16} className="text-blue-300" /> : <Database size={16} className="text-green-300" />}
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    >
                      {index === 0 ? <Server size={16} className="text-purple-300" /> : <Shield size={16} className="text-blue-300" />}
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-16 right-4 w-8 h-8 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center"
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      <Code size={12} className="text-yellow-300" />
                    </motion.div>
                    
                    <div className="absolute bottom-6 left-6">
                      <span className="text-sm font-medium text-blue-400 bg-blue-400/20 px-4 py-2 rounded-full border border-blue-400/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm font-medium text-gray-300 bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-600/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-800/20 pt-32">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get In <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how our elite engineering team can help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Let&apos;s Start a Conversation</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">rakshitmandloi@gmail.com</p>
                    <p className="text-gray-300">bansalharshit55@gmail.com</p>
                    <p className="text-gray-300">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Consultation</h4>
                    <p className="text-gray-300">Free 30-minute consultation</p>
                    <p className="text-gray-400 text-sm">Book a call with our experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Quick Response</h4>
                    <p className="text-gray-300">Rapid project assessment</p>
                    <p className="text-gray-400 text-sm">Get your project timeline in 48 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-600/50"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                    placeholder="Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-management">Cloud Management</option>
                    <option value="crm-solutions">CRM Solutions</option>
                    <option value="marketplace">Marketplace Solutions</option>
                    <option value="security">Security Solutions</option>
                    <option value="data-engineering">Data Engineering</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
                    <p className="text-green-400 text-sm">✅ Message sent successfully! We&apos;ll get back to you within 24 hours.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
                    <p className="text-red-400 text-sm">❌ Failed to send message. Please try again or email us directly.</p>
                  </div>
                )}
                
                <Button 
                  type="submit"
                  variant="gradient" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      </div> {/* Close content wrapper */}
    </div>
  );
}
