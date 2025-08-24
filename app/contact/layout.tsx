import Footer from "@/components/Footer";
import NavbarDemo from "@/components/Navbar";
import React, { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-dvh">
      <NavbarDemo />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
