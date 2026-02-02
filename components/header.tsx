"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center py-5 px-8 bg-white sticky top-0 z-50 shadow-sm">
      
      {/* Left: Avatar + Name */}
      <div className="flex items-center gap-3">
        <Link href="/" className="text-3xl font-extrabold text-purple-600 hover:text-pink-500">AS</Link>
      </div>

      {/* Right Navigation */}
      <nav className="flex items-center gap-6 text-lg font-medium">
        <a href="/projects" className="hover:text-pink-500">
          Projects
        </a>
        <a
          href="/Anna_Sicoli_Resume.pdf"
          download
          className="hover:text-pink-500"
        >
          Resume
        </a>
        <a href="https://github.com/annas2727" target="_blank">
          <Github className="w-6 h-6 text-purple-500 hover:text-pink-500" />
        </a>

        <a href="https://www.linkedin.com/in/annasicoli" target="_blank">
          <Linkedin className="w-6 h-6 text-purple-500 hover:text-pink-500" />
        </a>
      </nav>
    </header>
  );
}
