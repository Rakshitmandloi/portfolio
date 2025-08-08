"use client";

import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Users, Briefcase, Mail, Zap, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();

  // Handle scroll effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Track active section
  useEffect(() => {
    const sections = ['hero', 'services', 'about', 'projects', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.id === 'hero' ? 'home' : entry.target.id;
            setActiveSection(sectionName);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home, section: 'home' },
    { href: '#services', label: 'Services', icon: Zap, section: 'services' },
    { href: '#about', label: 'About', icon: Users, section: 'about' },
    { href: '#projects', label: 'Projects', icon: Briefcase, section: 'projects' },
    { href: '#contact', label: 'Contact', icon: Mail, section: 'contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elementId = href === '#home' ? 'hero' : href.slice(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Fixed Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Fixed Container */}
        <motion.div
          className={`relative bg-slate-950/90 backdrop-blur-3xl border-b border-white/20 px-8 py-4 shadow-2xl shadow-black/40 transition-all duration-500 ${
            isScrolled ? 'bg-slate-950/95 shadow-black/60 border-b-white/30' : ''
          }`}
          animate={{
            scale: isScrolled ? 1 : 1,
            y: isScrolled ? 0 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" />
          
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-500/15 blur-xl opacity-40"
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="container mx-auto">
            <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-4 mr-6 group"
              onClick={(e) => handleSmoothScroll(e, '#home')}
            >
              <motion.div
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Code className="w-6 h-6 text-white" />
                
                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-blue-400/50 rounded-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
                OurPortfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.section;
                return (
                  <motion.button
                    key={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className={`relative px-5 py-3 rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-white/15 text-white shadow-xl shadow-blue-500/20 border border-white/20' 
                        : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30"
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      
                      {/* Hover glow */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{
                          boxShadow: "0 8px 30px rgba(255, 255, 255, 0.15)",
                        }}
                      />
                    </div>
                  </motion.button>
                );
              })}
              
              {/* CTA Button */}
              <motion.div
                className="ml-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button 
                  variant="gradient" 
                  size="sm"
                  className="relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300 px-6 py-3"
                  onClick={(e) => handleSmoothScroll(e, '#contact')}
                >
                  <span className="relative z-10 font-medium">Get Started</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-3 rounded-2xl bg-white/15 text-white hover:bg-white/25 transition-colors duration-300 border border-white/20"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.nav>

      {/* Mobile Navigation Overlay */}
      <motion.div
        className="md:hidden fixed inset-0 z-40"
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Mobile Menu */}
        <motion.div
          className="absolute top-full left-4 right-4 bg-slate-950/95 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-black/60 mt-2"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            y: isOpen ? 0 : -20,
            scale: isOpen ? 1 : 0.95,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Dark overlay for mobile menu */}
          <div className="absolute inset-0 bg-slate-950/70 rounded-3xl" />
          
          <div className="relative space-y-4">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.section;
              return (
                <motion.button
                  key={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="w-full text-left group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-400/30 shadow-lg shadow-blue-500/10' 
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}>
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </motion.button>
              );
            })}
            
            <motion.div
              className="pt-6 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Button 
                variant="gradient" 
                className="w-full shadow-xl"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
