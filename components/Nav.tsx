"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type navProps = {
  navLinks: {
    name: string;
    path: string;
  }[];
};

const Nav = ({ navLinks }: navProps) => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <nav className="fixed top-20 md:top-6  left-0 w-full shadow-lg z-50 flex ">
      <section className="container mx-auto  flex">
        <ul className="flex justify-center space-x-4 border-2 border-white/[0.04] sm:max-w-[500px]  mx-auto px-6 py-2 rounded-full">
        {navLinks.map((link, index) => {
          return <Link 
            href={link.path} 
            key={index} 
            className={`${link.path === pathname && 'text-accent border-b-2 border-accent '} capitalize font-medium hover:text-accent transition-all`}>
            {link.name}
          </Link>;
        })}
        </ul>
      </section>
    </nav>
  );
};

export default Nav;
