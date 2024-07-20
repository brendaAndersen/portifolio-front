"use client";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "./nav-item";
const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];
export const Header = () => {
  return (
    <header className="absolute top-0 z-10 h-24 w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/projects">
          <Image
            width={80}
            height={80}
            src="/images/icons/logo1.png"
            alt="Logo"
          />
        </Link>
        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
