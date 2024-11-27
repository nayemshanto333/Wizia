import React from "react";

const Control = () => {
  return (
    <section className="w-full max-w-[1400px] px-2.5 md:px-5 lg:px-10 mx-auto  ">
      <div className="flex flex-col justify-center items-center space-y-4 py-20 bg-[url(Frame.png)] bg-no-repeat bg-cover rounded-3xl">
        <div className="justify-start space-y-5">
          <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl ">
            Train your aiDR on your...
          </h1>
          <p className="text-[#0FF1F6] font-bold text-2xl md:text-3xl lg:text-4xl">
            <em>prefered email st|</em>
          </p>
          <p className="text-white text-base lg:text-xl max-w-[350px]">
            You&apos;re in control. Train your aiDR on elements of your
            Marketing strategy.
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex gap-2">
                    <img src="icon5.png" alt="" />
                    <p className="text-white">Quick to ramp</p>
                </div>
                <div className="flex gap-2">
                    <img src="icon5.png" alt="" />
                    <p className="text-white">Easy to optimize</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-10">
                <div className="flex gap-2">
                    <img src="icon5.png" alt="" />
                    <p className="text-white">Quick to scale up</p>
                </div>
                <div className="flex gap-2">
                    <img src="icon5.png" alt="" />
                    <p className="text-white">Works with all your existing tools</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Control;
