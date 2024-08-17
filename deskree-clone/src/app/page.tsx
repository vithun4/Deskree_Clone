"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  const ourProducts = [ // Product Card Details
    {
      title: "BaaS",
      description: "Pre-built backend services for web and mobile apps, powered by ION and DAC",
      img_link: "BaaS_card_img.svg",
      color: "#C1C9FB",
    },
    {
      title: "ION",
      description: "Manage Integration, APIs and complex backend processes, visually with built in nodes.",
      img_link: "ION_card_img.svg",
      color: "#dafed8",
    },
    {
      title: "Atomic Computing",
      description: "Create and deploy scalable could infrastructure with ease with Atomic framework.",
      img_link: "Atomic_Computing_img.svg",
      color: "#ffffff",
    }
  ];

  return (
    <main className="flex min-h-screen flex-col justify-between mt-52 mx-44">
      <div className="main-heading">
        Your backend, now more
        <br />
        <FlipWords
          words={[
            "simplified.",
            "scalable.",
            "manageable.",
          ]}
          duration={2500}
        />
        <div className="flex space-x-2 mt-8">
          <button className="button-primary">
            Get Started
          </button>
          <button className="button-secondary">
            Book a Demo
          </button>
        </div>
      </div>
      <div className="border border-[#2a2a2a] mt-24 p-8 rounded">
        <div className="flex items-start mb-28 mt-4 space-x-4">
          <h2 className="text-2xl font-bold mt-0 flex-1">
            Build cloud infrastructure with ease, powered by open-source, Atomic architecture.
          </h2>
          <p className="text-lg mt-0 text-gray dark:text-quote flex-1">
            Deploy scalable and reusable workflows for your complex backend processes using nodes with no configuration, running independently, all managed by the Atomic architecture.
          </p>
        </div>
        <div className="border-t border-[#2a2a2a] mt-10 p-4" />
        <p className="text-xl mt-8">
          Our Products
        </p>
        <BentoGrid className="mt-10 p-1 ">
          {ourProducts.map((product, index) => (
            <BentoGridItem
            className="product-card"
            key={index}
            title={product.title}
            description={product.description}
            classColor={product.color}
            icon={
              <Image
                src={`/${product.img_link}`}
                alt={product.title}
                width={700} 
                height={400}
                objectFit="contain" 
              />
            }
          />         
          ))}
        </BentoGrid>
      </div>
      <div className="mt-24 text-xl">
        Solution for businesses
        <div className="flex gap-4 mt-8">
        <div className="flex-1 rounded-xl p-4 flex flex-col justify-between div-block-4">
          <div>
            <h2 className="text-5xl font-bold mb-4">Enterprise program</h2>
          </div>
          <div className="mt-auto">
            <p className="mb-4 text font-bold">
              Discover how Deskree provides secure and robust scalability and integration for large-scale businesses.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="/circular_white_checkmark.svg"
                alt="Circular Checkmark"
                width={20}
                height={20}
              />
              <p className="text-xs font-bold">SOC 2 Type II, GDPR & HIPAA Compliant</p>
            </div>
            <Image
              src="/right_arrow_white.svg"
              alt="Right Arrow"
              width={51}
              height={15}
            />
          </div>
        </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/desktree_workspace_img.jpg"
              alt="Deskree Workspace"
              width={600}
              height={200}
              objectFit="contain"
              className="rounded-lg aspect-w-16 aspect-h-8"
            />
          </div>
          <div className="flex-1 border rounded-xl p-4 flex flex-col justify-between startup-color text-black div-block-4">
            <div>
              <h2 className="text-5xl font-bold mb-4">Accelerate program</h2>
            </div>
            <div className="mt-auto text-xl">
              <p className="text mb-16 font-bold">
                Learn how Deskree helps your team remain small, build features fast, and get to market faster, all with no overhead cloud cost.
              </p>
              <Image
                src="/right_arrow_black.svg"
                alt="Right Arrow"
                width={51}
                height={15}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#2a2a2a] p-16 rounded-lg mt-10">
        <p className="text-3xl font-semibold">
          With Deskree, developers and business focus more on innovation and less on complex cloud setup.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="button-primary">
            Get Started
          </button>
          <button className="button-secondary bg-black">
            Book a Demo
          </button>
        </div>
      </div>
    </main>
  );
}
