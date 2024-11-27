import { Button, Link } from '@nextui-org/react';
import React from 'react';

const NewEra = () => {
  return (
    <section >
      <div className="w-full max-w-[1400px] mx-auto font-Montserrat items-center px-2.5 md:px-10 lg:px-20 xl:px-24 py-10 md:py-14 lg:py-20 xl:py-32">
        <div className="space-y-4 flex flex-col items-center  ">
          <p className="text-[#0FF1F6] text-sm md:text-base ">
          GET STARTED
          </p>
          <h1 className="text-white text-xl md:text-3xl  ">
          <em>Embrace</em><span className='font-bold'> the new era of</span> <em>outbound</em>.
          </h1>
          <p className="text-white text-sm md:text-md text-center  ">
          Wizia lets you train, activate, and optimize aiDRs. <br /> 
          Take your outbound to new levels of performance and efficiency.
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
}

export default NewEra;
