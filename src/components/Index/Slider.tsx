'use client'

import { Navigation, Pagination, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

import '../../styles/main.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import '../../styles/base/_slider.scss'

export const slides = [
  {
    text: '“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!”',
    auther: '– Ronald Richards',
  },
  {
    text: '“Не каждый может взвалить на себя груз ответственности, а я навалил груз на детской площадке.”',
    auther: '– Jason Statham',
  },
  {
    text: '“Красиво делай - красиво будет”',
    auther: '– Lonely Wols',
  },
  {
    text: '“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic voluptates deserunt dolore, corrupti, atque officiis odit repellendus commodi, debitis nisi odio inventore nemo saepe! Sequi deserunt eos architecto assumenda dignissimos.”',
    auther: '– Arnold Rise',
  },
]

export default function Slider() {
  return (
    <div className="slider-section">
      <h2 className="title-h2 slider-section__title">Our Clients say</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <p className="slide__text">{slide.text}</p>
            <h6 className="title-h6 slide__auther">{slide.auther}</h6>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="btn-secondary slider-section__btn">Read reviews</button>
    </div>
  )
}
