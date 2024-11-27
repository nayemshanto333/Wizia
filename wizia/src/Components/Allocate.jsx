import React from 'react';

const Allocate = () => {
  return (
    <section className="w-full max-w-[1400px] font-Montserrat px-2.5 md:px-5 lg:px-10 mx-auto mt-10 ">
      <div className="flex flex-col px-5 md:px-10 lg:px-16  space-y-4 py-20 bg-[url(Frame2.png)] bg-no-repeat bg-cover rounded-3xl">
      <div className="justify-start space-y-5">
          <h1 className="font-bold text-white text-lg md:text-2xl max-w-[400px] ">
          Allocate effort where your reps make an inpact.
          </h1>
          <p className="text-[#0FF1F6] font-bold text-lg md:text-2xl">
            <em>Let us handle the rest.</em>
          </p>
          <p className="text-white text-md lg:text-lg max-w-[400px]">
          Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-6 pt-10'>
            <div>
                <h1 className='font-bold text-white text-5xl mb-3'>32%</h1>
                <p className='text-white max-w-[250px] sm:max-w-[150px]'>Improvement in Open Rates</p>
            </div>
            <div>
                <h1 className='font-bold text-white text-5xl mb-3'>75%</h1>
                <p className='text-white max-w-[250px] sm:max-w-[150px]'>Improvement in Ramp Time</p>
            </div>
            <div>
                <h1 className='font-bold text-white text-5xl mb-3'>35%</h1>
                <p className='text-white max-w-[250px] sm:max-w-[150px]'>Improvement in Meetings Booked</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Allocate;
