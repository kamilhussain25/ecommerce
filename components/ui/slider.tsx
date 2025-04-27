"use client"

import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
//import { Autoplay } from "some-carousel-library"
import { Card, CardContent } from "../ui/card"
 


 



const SlidersWithText = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const images = [
    "/image.1.jpg",
    "/images.2.jpg",
    "/image.3.jpg",
    "/images.4.jpg",
    "/image.1.jpg",
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 bg-black">
      {/* Slider on the left, 60% width */}
      <div className="w-full lg:w-[60%] p-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <Card>
                    <CardContent className="p-0">
                      <img
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full object-containw-full h-[300px] object-contain object-center rounded-md transition-transform duration-1000 hover:scale-150 "
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Text on the right, 40% width */}
      <div className="w-full lg:w-[40%] text-center mt-30">
        <h2 className="text-6xl font-bold text-center text-red-400 mb-5 animate-bounce">LIMITED OFFER</h2>
        <h2 className="text-2xl font-bold text-center text-white">GET DISCOUNT</h2>
        <h2 className="text-4xl font-bold text-center text-white mt-10 animate-caret-blink">50% <i className='text-amber-500'>off</i> </h2>
        <p className="text-lg text-amber-500 ">
        Exclusive products just for you
        </p>
        
      </div>
    </div>
  );
};

export default SlidersWithText;
