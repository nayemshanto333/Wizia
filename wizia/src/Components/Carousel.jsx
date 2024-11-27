
import React, { useState } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      icon: "quote.png",
      desc: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      type: "Chief Strategy Officer @ Company",
    },
    {
      id: 2,
      icon: "quote.png",
      desc: "Suspendisse potenti. Morbi vehicula ipsum ut dolor scelerisque, ac facilisis ligula dapibus.",
      name: "Jane Smith",
      type: "CEO @ AnotherCompany",
    },
    {
      id: 3,
      icon: "quote.png",
      desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      name: "Alice Johnson",
      type: "Marketing Head @ CoolStartup",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-10/12 mx-auto mt-10">
      <div className="p-8  text-center">
        <div className="flex flex-col justify-center items-center space-y-3">
          <div className="bg-[#183A40] rounded-full p-3">
            <img
              src={slides[currentIndex].icon}
              alt="icon"
              className="w-5 h-5"
            />
          </div>
          <p className="text-white text-lg max-w-[500px]">{slides[currentIndex].desc}</p>
          <p className="text-white font-bold">{slides[currentIndex].name}</p>
          <p className="text-[#96ACAF]">{slides[currentIndex].type}</p>
        </div>

        {/* Navigation Buttons */}
        <div className=" flex justify-center gap-5 sm:justify-between items-center my-5">
          <button
            onClick={prevSlide}
            className=" bg-[#183A40] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition translate top-50 left-50"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#183A40] text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
