"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import { RefObject, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";


import { Globe } from "@/components/magicui/globe";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Feature251 = () => {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-5">
          {/* 1st Card  */}
          <Card className="w-166 relative h-96 rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Customizable Workflows
              </h3>
              <p className="text-muted-foreground/70 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </CardHeader>
            <CardContent ref={containerRef1} className="relative ml-5">
              <IconCard
                ref={div1Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                className="mb-3"
              />
              <IconCard
                ref={div2Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg"
                className="translate-x-32"
              />
              <IconCard
                ref={div3Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg"
                className="mt-3"
              />
              <IconCard
                ref={div5Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="absolute right-12 top-1/2 -translate-y-1/2"
              />
              <div
                ref={div4Ref as React.RefObject<HTMLDivElement>}
                className="z-99 bg-muted absolute left-1/2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border"
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div1Ref}
                curvature={40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div2Ref}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div3Ref}
                curvature={-40}
                toRef={div4Ref}
              />
              <AnimatedBeam
                duration={3}
                containerRef={containerRef1}
                fromRef={div4Ref}
                toRef={div5Ref}
              />
            </CardContent>
          </Card>

          {/* 2nd Card */}
          <Card className="md:w-83 h-96 w-full rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Smart Task Tracking{" "}
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </CardHeader>
            <CardContent
              ref={containerRef2}
              className="relative flex h-full flex-col items-center justify-between"
            >
              <IconCard
                ref={div6Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="mb-3"
              />

              <IconCard
                ref={div7Ref as React.RefObject<HTMLDivElement>}
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/g2-icon.svg"
                className="mt-3"
              />

              <AnimatedBeam
                duration={3}
                containerRef={containerRef2}
                fromRef={div6Ref as React.RefObject<HTMLDivElement>}
                direction="vertical"
                curvature={40}
                toRef={div7Ref as React.RefObject<HTMLDivElement>}
              />
            </CardContent>
          </Card>

          {/* 3rd card */}
          <Card className="relative flex h-96 w-full flex-col rounded-3xl border md:w-[330px]">
            <CardContent>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                className="mt-5 size-32"
                alt=""
              />
            </CardContent>
            <CardHeader className="mt-auto">
              <h3 className="text-2xl font-semibold tracking-tight">
                Seamless Integration & Real-Time Collaboration
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </CardHeader>
          </Card>
          {/* 4th card */}
          <Card className="w-166 h-96 overflow-hidden rounded-3xl border">
            <CardHeader>
              <h3 className="text-2xl font-semibold tracking-tight">
                Trusted by 100k Users{" "}
              </h3>
              <p className="text-muted-foreground/70">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt Lorem ipsum dolor sit amet,
                consectetur
              </p>
            </CardHeader>

            <CardContent className="relative">
              <Globe className="-top-4" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Feature251 };

const IconCard = ({
  src,
  className,
  ref,
}: {
  src: string;
  className?: string;
  ref: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-muted relative z-10 flex size-14 items-center justify-center rounded-xl",
        className,
      )}
    >
      <img src={src} alt="Google" className="size-5" />
      <HandleIcon className="absolute -top-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2" />
      <HandleIcon className="absolute -left-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
      <HandleIcon className="absolute -right-3 top-1/2 size-6 -translate-y-1/2 rotate-90" />
    </div>
  );
};

const HandleIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="14"
      height="5"
      viewBox="0 0 14 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.543457"
        y1="0.972656"
        x2="0.543457"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="4.54346"
        y1="0.972656"
        x2="4.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="8.54346"
        y1="0.972656"
        x2="8.54346"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
      <line
        x1="12.5435"
        y1="0.972656"
        x2="12.5435"
        y2="4.625"
        stroke="black"
        strokeOpacity="0.2"
      />
    </svg>
  );
};

// Below is the modified component from Magic UI
// Original source: https://magicui.design/docs/components/animated-beam
// Modified to follow our coding standards and design system
// We respect copyright and attribution to the original creators

