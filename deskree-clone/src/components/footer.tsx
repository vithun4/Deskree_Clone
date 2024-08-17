"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="border-t border-[#2a2a2a] mt-10">
      <footer className="bg-background-dark py-8 mt-10 mx-44">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-7 gap-8">
          <div className="md:col-span-3 flex flex-col items-start">
            <Image src="/white_thumbnail.png" alt="Deskree Logo" width={30} height={30} />
            <p className="text-block-21 mt-4">
              Deskree is a cloud platform that simplifies and optimizes backend development and infrastructure management for businesses and developers.
            </p>
          </div>
          <div>
            <h4 className="footer-label">Products</h4>
            <ul className="space-y-2 mt-2">
              <li className="footer-text">
                <a href="#">
                  BaaS
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  ION
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Atomic
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-label">Solutions</h4>
            <ul className="space-y-2 mt-2">
              <li className="footer-text">
                <a href="#">
                  Enterprise
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Accelerate
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-label">Resources</h4>
            <ul className="space-y-2 mt-2">
              <li className="footer-text">
                <a href="#">
                  About
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Blog
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Brand Guidelines
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Privacy
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Terms
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Whistleblower
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Trust Center
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-label">Contact</h4>
            <ul className="space-y-2 mt-2">
              <li className="footer-text">
                <a href="#">
                  Support
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Investors
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Partnerships
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Twitter
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  LinkedIn
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  Discord
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  GitHub
                </a>
              </li>
              <li className="footer-text">
                <a href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto text-block-21 mt-8">
          © Copyright 2024, Deskree Technologies
        </div>
      </footer>
    </div>
  );
}
