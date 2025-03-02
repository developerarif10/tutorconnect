"use client";
import { useLockBody } from "@/hooks/use-lock-body";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function MobileNav({ items, children, onClose }) {
  useLockBody();

  const { data: session } = useSession();
  const [loginSession, setLoginSession] = useState(null);

  useEffect(() => {
    setLoginSession(session);
  }, [session]);

  return (
    <>
      <div
        className="fixed inset-0 top-[73px] z-40 bg-black/50"
        onClick={onClose}
      />
      <div
        className={cn(
          "fixed inset-x-0 top-[73px] z-50 h-[calc(100vh-73px)] overflow-y-auto bg-white dark:bg-slate-800 pb-safe-area-inset-bottom"
        )}
      >
        <div className="relative grid gap-6 p-6">
          <nav className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700/50",
                  item.disabled && "cursor-not-allowed opacity-60"
                )}
                onClick={onClose}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {!loginSession && (
            <div className="grid gap-2">
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
                onClick={onClose}
              >
                Log In
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full">
                    Sign Up
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-56 mt-2 bg-white dark:bg-slate-800"
                >
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={onClose}
                  >
                    <Link href="/register/student" className="w-full">
                      Student
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700/50"
                    onClick={onClose}
                  >
                    <Link href="/register/instructor" className="w-full">
                      Instructor
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
          {children}
        </div>
      </div>
    </>
  );
}
