import { MainNav } from "@/components/main-nav";
import Footer from "@/components/site-footer";

import { SessionProvider } from "next-auth/react";

const navLinks = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];
const MainLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 fixed top-0 left-0 right-0 border-b">
        <SessionProvider>
          <div className="container flex items-center justify-between py-6 ">
            <MainNav items={navLinks} />
          </div>
        </SessionProvider>
      </header>
      <main className="flex-1 flex flex-col mt-12">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
