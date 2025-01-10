
import React from "react";
import { Button } from "./ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./Socials";
import Photo from "./Photo";
import Stats from "./Stats";


const Hero = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center md:text-left order-2 md:order-none">
            <span className="text-xl">Front-End Developer based in Kakuma Refugee Camp</span>
            <h1 className="text-[48px] md:text-[80px] leading-[1.1] font-semibold">
              Welcome I&apos;m <br />
              <span className="text-accent">Kuol Buom</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 p-2 md:p-0">
              I&apos;m a junior web developer passionate about creating elegant
              digital experiences and learning through hands-on practice. I actively seek
              solutions and guidance, leveraging resources like ChatGPT to
              troubleshoot and refine my work.
            </p>

            {/* button and socials */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Button
                variant={"outline"}
                size="lg"
                className="uppercase flex items-center gap-2 
              text-accent border-accent hover:text-black rounded-full"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 md:mb-0">
                <Socials
             
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 md:order-none md:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  );
};

export default Hero;
