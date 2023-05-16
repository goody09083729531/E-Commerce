import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroBanner = ({ heroBanner }) => {
  return (
    <section className="home">
      <div className="home-slider">
        <div className="wrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>
            <div className="slide">
              <div className="content">
                <span>{heroBanner.smallText}</span>
                <h3>{heroBanner.midText1}</h3>
                <p>{heroBanner.desc1}</p>
                <Link href={`/product/${heroBanner.product}`}>
                  <button className="btn" type="button">{heroBanner.buttonText}</button>
                </Link>
              </div>
              <div className="image">
                <img src={urlFor(heroBanner.image1)} alt="iphone" />
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="slide">
              <div className="content">
                <span>{heroBanner.smallText}</span>
                <h3>{heroBanner.midText2}</h3>
                <p>{heroBanner.desc2}</p>
                <Link href={`/product/${heroBanner.product}`}>
                  <button className="btn" type="button">{heroBanner.buttonText}</button>
                </Link>
              </div>
              <div className="image">
                <img src={urlFor(heroBanner.image2)} alt="headphone" />
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="slide">
              <div className="content">
                <span>{heroBanner.smallText}</span>
                <h3>{heroBanner.midText3}</h3>
                <p>{heroBanner.desc3}</p>
                <Link href={`/product/${heroBanner.product}`}>
                  <button className="btn" type="button">{heroBanner.buttonText}</button>
                </Link>
              </div>
              <div className="image">
                <img src={urlFor(heroBanner.image3)} alt="watches" />
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner