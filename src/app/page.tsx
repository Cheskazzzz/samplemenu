"use client";

import { Button } from "sample/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tagline } from "sample/components/pro-blocks/landing-page/tagline";
import { AspectRatio } from "sample/components/ui/aspect-ratio";
import Image from "next/image";

export default function Page() {
  return (
    <main
      className="min-h-screen bg-gradient-to-b from-[#F7A5A5] to-[#FFDDE0]"
      aria-labelledby="hero-heading"
    >
          <div className="container-padding-x container mx-auto flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Left Column */}
            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              {/* Section Title */}
              <div className="section-title-gap-xl flex flex-col">
                {/* Tagline */}
                <Tagline>Chiikawa</Tagline>
                {/* Main Heading */}
                <h1 id="hero-heading" className="heading-xl">
                  Chiikawa Season 1
                </h1>
                {/* Description */}
                <p className="text-muted-foreground text-base lg:text-lg">
                  Chiikawa, also known as Nanka Chiisakute Kawaii Yatsu is a Japanese web manga series written and illustrated by Nagano. It follows the daily adventures of the titular protagonist, along with a series of animal-inspired characters.
                </p>
              </div>
    
              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button>Get started</Button>
                <Button variant="ghost">
                  Explore
                  <ArrowRight />
                </Button>
              </div>
            </div>
    
            {/* Right Column - reduced width on large screens so the image is smaller */}
            <div className="w-full flex-1 lg:w-2/5">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/season.jpg"
                  alt="Season visual"
                  fill
                  priority
                  className="h-full w-full rounded-xl object-cover"
                />
              </AspectRatio>
            </div>
          </div>
    </main>
  );
}
