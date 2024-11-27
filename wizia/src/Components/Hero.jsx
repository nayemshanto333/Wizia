import { Button, Link } from "@nextui-org/react";
import React from "react";

const Hero = () => {
  return (
    <section className=" bg-[url(hero.png)] bg-no-repeat bg-cover">
      <div className="w-full max-w-[1400px] mx-auto items-center px-2.5 md:px-10 lg:px-20 xl:px-24 py-10 md:py-14 lg:py-20 xl:py-32">
        <div className="space-y-4 flex flex-col items-center sm:items-start ">
          <p className="text-[#0FF1F6] text-base md:text-lg lg:text-xl xl:text-2xl">
            AI SDRs (aiDRs)
          </p>
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-[280px]">
            More leads, less people.
          </h1>
          <p className="text-white text-sm md:text-base  max-w-[350px]">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="shadow"
            radius="full"
            className="text-[#002228] font-semibold text-md w-full sm:w-fit "
          >
            Sign Up for the Beta <img src="icon1.png" alt="icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
