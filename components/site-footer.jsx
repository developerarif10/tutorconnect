"use client";

import {
  ArrowRight,
  CheckCircle,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
              Empowering learners worldwide with quality education. Join our
              community of over 50,000+ students and expert instructors.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { text: "About Us", href: "/about" },
                { text: "Our Courses", href: "/courses" },
                { text: "Become an Instructor", href: "/teach" },
                { text: "Career Guide", href: "/career" },
                { text: "Student Success Stories", href: "/success-stories" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {[
                { text: "Help Center", href: "/help" },
                { text: "Terms of Service", href: "/terms" },
                { text: "Privacy Policy", href: "/privacy" },
                { text: "Cookie Policy", href: "/cookies" },
                { text: "Contact Us", href: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm"
                  required
                />
                <Button
                  type="submit"
                  className="absolute right-1 top-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-md px-3 py-1 text-sm"
                >
                  {subscribed ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Mail className="h-4 w-4 text-cyan-500" />
                support@tutorconnect.com
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Phone className="h-4 w-4 text-cyan-500" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-cyan-500" />
                123 Learning Street, Education City, 12345
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
              © {new Date().getFullYear()} TutorConnect. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <Link
                href="/accessibility"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                Accessibility
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                Sitemap
              </Link>
              <Link
                href="/security"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                Security
              </Link>
              <Link
                href="/responsible-disclosure"
                className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                Responsible Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
