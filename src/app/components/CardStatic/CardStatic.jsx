import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from "swiper/modules";
// Styles
import "swiper/css";
import "swiper/css/scrollbar";
import {CardStaticBox, CardStaticItemWrap, CardStaticTitle, Wrapper} from "./CardStatic.styles"

const data = [
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
  {
    startCount:0,
    endCount:100,
    title: "wasted spending",
  },
];

const CardStaticItem = () => {
  return (
    <CardStaticItemWrap>
      <CardStaticBox>
        <p>
          <span>0</span>/<span>100</span>
        </p>
      </CardStaticBox>
      <CardStaticTitle>
        <p>wasted spending</p>
      </CardStaticTitle>
    </CardStaticItemWrap>
  );
}

const CardStatic = () => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
        className="cardStaticWrap"
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <CardStaticItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
}

export default CardStatic