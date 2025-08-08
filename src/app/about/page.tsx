"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Award, Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function About() {
  const founders = [
    {
      name: 'Alex Thompson',
      role: 'Co-Founder & CTO',
      image: '/placeholder-founder-1.jpg', // Replace with actual image
      bio: 'Passionate technologist with 10+ years of experience in full-stack development and system architecture. Specialized in cloud solutions and digital transformation.',
      achievements: [
        'Led 50+ successful digital transformation projects',
        'AWS Solutions Architect Professional',
        'Microsoft Azure Expert',
        'Former Tech Lead at Fortune 500 companies',
        'Open source contributor with 10K+ GitHub stars',
      ],
      skills: ['Cloud Architecture', 'DevOps', 'AI/ML', 'Blockchain', 'Microservices'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Co-Founder & CEO',
      image: '/placeholder-founder-2.jpg', // Replace with actual image
      bio: 'Strategic business leader with expertise in technology consulting and client relationship management. Focused on driving innovation and business growth through technology.',
      achievements: [
        'Scaled tech startups from 0 to $10M+ revenue',
        'MBA from Stanford Business School',
        'Certified Project Management Professional',
        'Former Director at McKinsey & Company',
        'TEDx speaker on digital transformation',
      ],
      skills: ['Business Strategy', 'Digital Innovation', 'Client Relations', 'Team Leadership', 'Product Management'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
      }
    }
  ];

  const companyStats = [
    { icon: Users, value: '50+', label: 'Projects Completed' },
    { icon: Trophy, value: '15+', label: 'Awards Won' },
    { icon: Calendar, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '98%', label: 'Client Satisfaction' },
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
              Meet Our <span className="text-blue-400">Founders</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Two visionary leaders combining technical expertise with business acumen 
              to deliver exceptional IT solutions that transform businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-20">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Founder Image */}
                <div className="lg:w-1/3">
                  <motion.div
                    className="relative w-80 h-80 mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl border border-white/10 backdrop-blur-lg flex items-center justify-center">
                      {/* Placeholder for actual founder image */}
                      <div className="text-6xl text-white/50">👤</div>
                    </div>
                  </motion.div>
                </div>

                {/* Founder Info */}
                <div className="lg:w-2/3 text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {founder.name}
                  </h2>
                  <p className="text-xl text-blue-400 mb-6">{founder.role}</p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Core Expertise</h3>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {founder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-sm text-gray-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Achievements</h3>
                    <ul className="space-y-2 text-gray-300">
                      {founder.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Award className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center lg:justify-start">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={founder.social.github} target="_blank">
                        <Github className="w-5 h-5" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={founder.social.linkedin} target="_blank">
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower businesses with innovative technology solutions that drive growth, 
                efficiency, and competitive advantage in the digital age. We believe that every 
                organization deserves access to cutting-edge technology that transforms their operations 
                and unlocks their full potential.
              </p>
            </motion.div>

            <motion.div
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading IT consultancy that bridges the gap between complex technology 
                and business success. We envision a future where technology seamlessly integrates 
                with business processes, creating sustainable growth and innovation across all industries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our expertise can help transform your business
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
