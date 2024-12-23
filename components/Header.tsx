'use client'

import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";

const navLinks =[
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white mx-1 mb-16 px-4">
      <Nav
         navLinks={navLinks}
        />
      <div className="container mx-auto flex justify-between">
        {/* logo */}
        <Link href="/">
          <h1 className="flex justify-center items-center">
            Kuol<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* mobile nav */}
        <div className="flex justify-center items-center gap-10">
          <Link href="/contact">
            <Button className="text-accent border-2 border-white/[0.2] hover:bg-accent hover:text-black md:hover:bg-accent md:hover:text-black transition-all duration-200 ease-in-out ">Hire me</Button>
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
