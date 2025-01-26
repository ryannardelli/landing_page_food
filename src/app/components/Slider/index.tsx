"use client";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardHighlight } from "../CardHighlight";
import "swiper/css";
import "./styles.css";
export const Slider = () => {
  return (
    <>
      <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-1.png"}
            altImg={"Lasanha"}
            nameProdutc={"Lasanha"}
            price={15}
            description={"Camadas de massa, molho cremoso e queijo derretido, puro sabor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-2.png"}
            altImg={"Açaí"}
            nameProdutc={"Açaí"}
            price={12}
            description={"Açaí cremoso com toppings irresistíveis, energia e frescor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-3.png"}
            altImg={"Salada"}
            nameProdutc={"Salada"}
            price={10}
            description={"Salada fresca e colorida com ingredientes saudáveis e saborosos!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-1.png"}
            altImg={"Lasanha"}
            nameProdutc={"Lasanha"}
            price={15}
            description={"Camadas de massa, molho cremoso e queijo derretido, puro sabor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-2.png"}
            altImg={"Açaí"}
            nameProdutc={"Açaí"}
            price={12}
            description={"Açaí cremoso com toppings irresistíveis, energia e frescor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-3.png"}
            altImg={"Salada"}
            nameProdutc={"Salada"}
            price={10}
            description={"Salada fresca e colorida com ingredientes saudáveis e saborosos!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-1.png"}
            altImg={"Lasanha"}
            nameProdutc={"Lasanha"}
            price={15}
            description={"Camadas de massa, molho cremoso e queijo derretido, puro sabor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-2.png"}
            altImg={"Açaí"}
            nameProdutc={"Açaí"}
            price={12}
            description={"Açaí cremoso com toppings irresistíveis, energia e frescor!"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardHighlight
            srcImg={"img/img-slider-3.png"}
            altImg={"Salada"}
            nameProdutc={"Salada"}
            price={10}
            description={"Salada fresca e colorida com ingredientes saudáveis e saborosos!"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
