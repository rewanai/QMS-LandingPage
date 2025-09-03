import { Combine, Gauge, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const Feature204 = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center gap-10 md:gap-24 lg:flex-row lg:items-stretch">
          <div className="">
            <img
              src="/hero.png"
              alt="placeholder"
              className="rounded-2xl"
            />
          </div>
          <div className="flex max-w-2xl flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-medium text-balance lg:text-6xl">
                Unlock Your Potential with Our Platform.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Discover powerful tools and resources designed to elevate your
                projects and streamline your workflow effectively.
              </p>
              <Button size="lg" className="mt-8">
                Explore Now <Zap />
              </Button>
            </div>
            <div className="grid gap-7 sm:grid-cols-2">
              <div className="text-center lg:text-left">
                <Combine className=" size-8 mx-0" />
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  Seamless Integration
                </h3>
                <p className="text-muted-foreground">
                  Integrate effortlessly with your existing tools and systems.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <Gauge className=" size-8 mx-0" />
                <h3 className="mt-4 mb-2 text-lg font-semibold">
                  Reliable Performance
                </h3>
                <p className="text-muted-foreground">
                  Experience consistent speed and stability for all your needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature204 };
