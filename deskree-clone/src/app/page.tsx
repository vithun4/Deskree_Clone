"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  const ourProducts = [
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
        Your backend more
        <br />
        <FlipWords
          words={[
            "simplified",
            "scalable",
            "manageable",
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
      <div className="border border-[#2a2a2a] mt-10 p-4 rounded">
        <div className="flex items-start mb-28 mt-4 space-x-4">
          <h2 className="text-2xl font-bold mt-0">
            Build cloud infrastructure with ease, powered by open-source, Atomic architecture.
          </h2>
          <p className="text-lg mt-0">
            Deploy scalable and reusable workflows for your complex backend processes using nodes with no configuration, running independently, all managed by the Atomic architecture.
          </p>
        </div>
        <div className="border-t border-[#2a2a2a] mt-10 p-4" />
        Our Products
        <BentoGrid className="mt-10 p-1">
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
      <div>
        Solution for businesses
        <div className="flex gap-4">
          <div className="flex-1 rounded-xl p-4 flex flex-col justify-between div-block-4">
            <div>
              <h2 className="text-xl font-bold mb-4">Enterprise program</h2>
              <p className="mb-4">
                Discover how Deskree provides secure and robust scalability and integration for large-scale businesses.
              </p>
              <p>SOC 2 Type II, GDPR & HIPAA Compliant</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/desktree_workspace_img.jpg"
              alt="Deskree Workspace"
              width={700}
              height={300}
              objectFit="contain"
              className="rounded-lg aspect-w-16 aspect-h-9"
            />
          </div>
          <div className="flex-1 border rounded-xl p-4 flex flex-col justify-between startup-color text-black div-block-4 startup-color">
            <div>
              <h2 className="text-xl font-bold mb-4">Accelerate program</h2>
              <p>
                Learn how Deskree helps your team remain small, build features fast, and get to market faster, all with no overhead cloud cost.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center bg-[#2a2a2a] p-16 rounded-lg mt-10">
        <p className="text-lg md:text-xl lg:text-2xl font-semibold">
          With Deskree, developers and business focus more on innovation and less on complex cloud setup.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="button-primary">
            Get Started
          </button>
          <button className="button-secondary">
            Book a Demo
          </button>
        </div>
      </div>
    </main>
  );
}
