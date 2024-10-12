"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto  z-50 sm:px-5 px-5  ", className)}
    
    >  
      <Menu setActive={setActive} >
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home" ></MenuItem>
        </Link>
        <MenuItem
        setActive={setActive} active={active} item="courses"
        >
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All Courses</HoveredLink>
          <HoveredLink href="/courses">Basic music Theory</HoveredLink>
          <HoveredLink href="/courses">Advance Composition</HoveredLink>
          <HoveredLink href="/courses">SongWriting</HoveredLink>
          <HoveredLink href="/courses">Music production</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
        <MenuItem active={active} setActive={setActive} item="Contact "></MenuItem>
        </Link>
      </Menu>
      </div>
  )
}

export default Navbar