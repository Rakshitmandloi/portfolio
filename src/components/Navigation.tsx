"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Code, Users, Briefcase, Mail, Zap } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: Code },
    { href: '#services', label: 'Services', icon: Zap },
    { href: '#about', label: 'About', icon: Users },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const handleSmoothScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const elementId = href === '#home' ? 'hero' : href.slice(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white">TechConsult</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = false; // We'll handle active state differently for single page
              return (
                <button
                  key={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative px-3 py-2 rounded-lg transition-colors text-gray-300 hover:text-white focus:outline-none"
                >
                  <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.div>
                </button>
              );
            })}
            <Button variant="gradient" onClick={(e) => handleSmoothScroll(e, '#contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              return (
                <button
                  key={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="w-full text-left"
                >
                  <motion.div
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-300 hover:bg-white/10 hover:text-white"
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </motion.div>
                </button>
              );
            })}
            <div className="px-4 pt-2">
              <Button 
                variant="gradient" 
                className="w-full" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
