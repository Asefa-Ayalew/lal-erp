import React from "react";
import { Header } from "./header/header";
import Footer  from "./footer/footer";

interface ShellProps {
  children: React.ReactNode;
}

const Shell: React.FC<ShellProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="dark:bg-gray-900 mx-40 min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Shell;
