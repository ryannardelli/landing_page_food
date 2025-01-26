"use client";
import { PaginationButtons } from "../PaginationButtons";
import { useRef } from "react";
import { Swiper } from 'swiper';

export const ContentHighlight = () => {
  const swiperRef = useRef<Swiper | null>(null);

  const handlePrevSlide = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNextSlide = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  return (
    <div className="flex m-4">
      <div className="flex flex-col gap-2 py-20 sm:mx-auto md:ml-36">
        <h1 className="uppercase text-lg font-bold text-colorSecondary tracking-wide text-center sm:text-center md:text-left">
          Pedidos Especiais
        </h1>
        <h2 className="text-5xl font-bold md:max-w-md text-center sm:text-center md:text-left">
          Prato de destaque do nosso menu
        </h2>
      </div>
      <PaginationButtons onPrev={handlePrevSlide} onNext={handleNextSlide} />;
    </div>
  );
};
