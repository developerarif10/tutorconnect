import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
export const Logo = ({ className = "" }) => {
  return (
    <Link href="/">
      <Image className={cn("max-w-[120px]", className)} src={logo} alt="logo" />
    </Link>
  );
};
