"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Zap, Shield, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform Modernization',
      category: 'Digital Transformation',
      description: 'Complete overhaul of legacy e-commerce system using microservices architecture, resulting in 300% performance improvement and 40% increase in conversion rates.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
      icon: Zap,
      image: '/placeholder-project-1.jpg',
      metrics: {
        performance: '+300%',
        conversion: '+40%',
        uptime: '99.9%'
      },
      duration: '6 months',
      teamSize: '8 developers',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Healthcare Data Analytics Platform',
      category: 'Data Science & Analytics',
      description: 'Built a comprehensive healthcare analytics platform with real-time monitoring, predictive analytics, and HIPAA-compliant data processing.',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'Azure', 'Power BI'],
      icon: Database,
      image: '/placeholder-project-2.jpg',
      metrics: {
        dataProcessed: '1M+ records',
        accuracy: '94%',
        compliance: 'HIPAA'
      },
      duration: '8 months',
      teamSize: '12 specialists',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Financial Services Security Upgrade',
      category: 'Cybersecurity',
      description: 'Implemented end-to-end security solutions including zero-trust architecture, advanced threat detection, and compliance automation.',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Splunk', 'Terraform', 'HashiCorp Vault'],
      icon: Shield,
      image: '/placeholder-project-3.jpg',
      metrics: {
        threatsBlocked: '99.8%',
        responseTime: '<30s',
        compliance: 'SOX/PCI'
      },
      duration: '4 months',
      teamSize: '6 experts',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Multi-Cloud Infrastructure Migration',
      category: 'Cloud Solutions',
      description: 'Orchestrated seamless migration from on-premises to multi-cloud environment with automated scaling, monitoring, and disaster recovery.',
      technologies: ['Terraform', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana'],
      icon: Cloud,
      image: '/placeholder-project-4.jpg',
      metrics: {
        costReduction: '-45%',
        scalability: '+500%',
        availability: '99.99%'
      },
      duration: '10 months',
      teamSize: '15 engineers',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Data Science & Analytics', 'Cybersecurity', 'Cloud Solutions'];

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
              Our <span className="text-blue-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Showcasing successful digital transformations and innovative solutions 
              that have driven measurable business impact for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-12 px-4">
        <div className="container mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "gradient" : "outline"}
                className={`${
                  index === 0 
                    ? "" 
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl border border-slate-700/50 overflow-hidden h-full transition-all duration-300 group-hover:bg-slate-700/50 group-hover:border-blue-400/30 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  {/* Project Image/Icon */}
                  <div className="relative h-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-white/70" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.teamSize}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-slate-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <Link href={project.links.demo}>
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Demo
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/20 text-white hover:bg-white/10"
                        asChild
                      >
                        <Link href={project.links.github}>
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Project <span className="text-blue-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from our successful project implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '$50M+', label: 'Revenue Generated' },
              { value: '200%', label: 'Avg. Performance Boost' },
              { value: '99.9%', label: 'System Uptime' },
              { value: '45%', label: 'Cost Reduction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with cutting-edge technology
            </p>
            <Button variant="gradient" size="lg" asChild>
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
