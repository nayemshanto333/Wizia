import React from "react";

const Card = () => {
  const cardData = [
    {
      icon: "icon2.png",
      title: "You're in Control",
      desc: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },

    {
      icon: "icon3.png",
      title: "Infinitely Scalable",
      desc: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },

    {
      icon: "icon4.png",
      title: "Incredibly Flexible",
      desc: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];
  return (
    <section className="w-full max-w-[1400px] mx-auto py-20 px-2.5 sm:px-5 md:px-10 lg:px-20 xl:px-24 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 space-y-6  ">
        {cardData.map((item, i) => (
          <div key={i} className="space-y-3">
            <img src={item.icon} className="w-10" alt="icon" />
            <h1 className="text-white font-bold text-lg md:text-xl">{item.title}</h1>
            <p className="text-white text-base max-w-[285px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
