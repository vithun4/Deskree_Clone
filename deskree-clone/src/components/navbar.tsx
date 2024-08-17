"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
        className={cn("fixed top-9 inset-x-0 w-full mx-auto z-50", className)}
      >
        <Menu setActive={setActive} >
          <div className="flex-shrink-0 pl-40">
            <Image
              src="nav_bar_logo_white.svg"
              alt="Deskree"
              width={130}
              height={24}
            />
          </div>
          <div className="flex-1 flex justify-center space-x-8">
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="text-sm grid grid-cols-1 gap-10 p-4">
                <ProductItem 
                  title="Deskree Backend"
                  href="/"
                  description="Pre-built backend services with ION and DAC"/>
                <ProductItem
                  title="ION"
                  href="/"
                  description="Visual workflows for backend processes"/>
                <ProductItem
                  title="Atomic Computing"
                  href="/"
                  description="Scalable cloud solutions with ease"/>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Solutions">
            
              <div className="text-gray text-sm dark:text-quote ml-2 mb-2">
                Business Solutions
              </div>
              <div className="border-t border-[#2a2a2a] p-4" />
              <div className="text-sm grid grid-cols-1 gap-10">
                <ProductItem
                  title="Enterprise program"
                  href="/"
                  description="For large-scale businesses requiring scalable solutions"/>
                <ProductItem
                  title="Accelerate program"
                  href="/"
                  description="For startups and agencies looking for faster APIs and integration"/>
              </div>
            </MenuItem>
            <HoveredLink href="/">Pricing</HoveredLink>
            <HoveredLink href="/">Documentation</HoveredLink>
          </div>
          <div className="flex-shrink-0 space-x-4 pr-40">
            <button className="button-primary">
              Login
            </button>
            <button className="button-secondary">
              Sign Up
            </button>
          </div>
        </Menu>
      </div>
    );
  }
