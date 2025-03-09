"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

const images = [
  "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
];

export function CarouselCard() {
  return (
    <div className="relative w-full overflow-hidden shadow-2xl">
      {/* Text Above Carousel */}
      {/* <div className="absolute top-0 left-0 w-full text-white z-20 p-8 text-center bg-gradient-to-b from-black/70 to-transparent">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Supersoft Information Systems PLC
        </motion.h1>
        <motion.p
          className="text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Supersoft Systems is a technology company focused on developing and
          implementing software systems and B2B commerce solutions, providing
          strong technical support and knowledge transfer to sustain the
          competitive advantages of customers.
        </motion.p>
      </div> */}
      
      {/* Swiper Carousel */}
      <Swiper
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-next", prevEl: ".swiper-prev" }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.img
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-[600px] object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom Navigation Buttons */}
      <button className="swiper-prev absolute top-1/2 left-4 z-30 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-white/50 transition">
        <ChevronLeft size={32} />
      </button>
      <button className="swiper-next absolute top-1/2 right-4 z-30 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white p-3 rounded-full shadow-lg hover:bg-white/50 transition">
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
