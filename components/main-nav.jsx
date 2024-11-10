"use client";

import { MobileNav } from "@/components/mobile-nav";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { Logo } from "./logo";

export function MainNav({ items, children }) {
  const { data: session } = useSession();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loginSession, setLoginSession] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const firstLetter =
    loggedInUser?.firstName?.charAt(0).toUpperCase() +
    loggedInUser?.lastName?.charAt(0).toUpperCase();

  if (session?.error === "RefreshAccessTokenError") {
    redirect("/login");
  }

  useEffect(() => {
    setLoginSession(session);
    async function fetchMe() {
      try {
        const response = await fetch("/api/me");
        const data = await response.json();
        setLoggedInUser(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMe();
  }, [session]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex gap-6 lg:gap-10">
              <Link href="/">
                <Logo />
              </Link>
              {items?.length ? (
                <nav className="hidden gap-6 lg:flex">
                  {items?.map((item, index) => (
                    <Link
                      key={index}
                      href={item.disabled ? "#" : item.href}
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              ) : null}

              {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
              )}
            </div>
            <nav className="flex items-center gap-3">
              {!loginSession && (
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
                      className="w-56 mt-4 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
                    >
                      <DropdownMenuItem className="cursor-pointer hover:bg-gray-100/80">
                        <Link href="/register/student">Student</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer hover:bg-gray-100/80">
                        <Link href="/register/instructor">Instructor</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
              <DropdownMenu>
                {loggedInUser && (
                  <DropdownMenuTrigger asChild>
                    <div className="cursor-pointer">
                      <Avatar>
                        <AvatarImage
                          src={loggedInUser?.profilePicture}
                          alt="@shadcn"
                        />
                        <AvatarFallback>{firstLetter}</AvatarFallback>
                      </Avatar>
                    </div>
                  </DropdownMenuTrigger>
                )}

                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-4 z-10 divide-y divide-gray-100 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
                >
                  <DropdownMenuItem
                    className="cursor-pointer dark:text-gray-200 hover:bg-gray-100/80"
                    asChild
                  >
                    <Link href="/account">Profile</Link>
                  </DropdownMenuItem>
                  {loggedInUser?.role === "instructor" && (
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-gray-100/80"
                      asChild
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100/80"
                    asChild
                  >
                    <Link href="/account/enrolled-courses">My Courses</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100/80"
                    asChild
                  >
                    <Link href="">Testimonials & Certificates</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-gray-100/80"
                    asChild
                  >
                    <Link href="">Dark Mode</Link>
                  </DropdownMenuItem>
                  {loginSession && (
                    <DropdownMenuItem
                      className="cursor-pointer hover:bg-gray-100/80"
                      asChild
                    >
                      <Link
                        href="#"
                        onClick={() => {
                          signOut();
                        }}
                      >
                        Logout
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                className="flex items-center space-x-2 lg:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X /> : <Menu />}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
