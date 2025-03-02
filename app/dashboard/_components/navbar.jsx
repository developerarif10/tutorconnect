"use client";

import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { title: "Features", href: "#features" },
  { title: "Pricing", href: "#pricing" },
  { title: "Blog", href: "#blog" },
  { title: "Documentation", href: "#documentation" },
];

export const Navbar = () => {
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [mounted, setMounted] = useState(false);

  const firstLetter =
    loggedInUser?.firstName?.charAt(0).toUpperCase() +
    loggedInUser?.lastName?.charAt(0).toUpperCase();

  useEffect(() => {
    setMounted(true);
    async function fetchMe() {
      try {
        const response = await fetch("/api/me");
        const data = await response.json();
        setLoggedInUser(data);
      } catch (err) {
        console.error(err);
      }
    }

    if (session) {
      fetchMe();
    }
  }, [session]);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMobileMenu]);

  if (!mounted) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-700/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-[73px]">
            {/* Logo and Navigation */}
            <div className="flex gap-6 lg:gap-10">
              <Link href="/" className="flex items-center">
                <Logo />
              </Link>
              <nav className="hidden lg:flex gap-6">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.disabled ? "#" : item.href}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors hover:text-cyan-500 dark:hover:text-cyan-400"
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right Side - Auth & Theme */}
            <div className="flex items-center gap-3">
              <ThemeSwitcher />

              {!session ? (
                <div className="items-center gap-3 hidden lg:flex">
                  <Link
                    href="/login"
                    className={cn(buttonVariants({ size: "sm" }), "px-4")}
                  >
                    Log In
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Sign Up
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="w-56 mt-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg"
                    >
                      <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                        <Link href="/register/student" className="w-full">
                          Student
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                        <Link href="/register/instructor" className="w-full">
                          Instructor
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                      <Avatar>
                        <AvatarImage
                          src={loggedInUser?.profilePicture}
                          alt={firstLetter || "User"}
                        />
                        <AvatarFallback>{firstLetter}</AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="w-56 mt-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg"
                  >
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                      <Link href="/account" className="w-full">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {loggedInUser?.role === "instructor" && (
                      <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                        <Link href="/dashboard" className="w-full">
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                      <Link href="/account/enrolled-courses" className="w-full">
                        My Courses
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50">
                      <Link href="#" className="w-full">
                        Testimonials & Certificates
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                      onClick={() => signOut()}
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {showMobileMenu && (
        <MobileNav
          items={navigationItems}
          onClose={() => setShowMobileMenu(false)}
        />
      )}
    </div>
  );
};
