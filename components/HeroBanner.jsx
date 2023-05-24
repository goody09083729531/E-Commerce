import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

const HeroBanner = ({ heroBanner }) => {
  SwiperCore.use([Autoplay])

  return (
    <section className="home">
      <div className="home-slider">
        <div className="wrapper">
          <Swiper
            spaceBetween={70}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
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
                <Image src={urlFor(heroBanner.image1).url()} alt="airpods" width={800} height={1000} quality={100} layout="intrinsic" />
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
                <Image src={urlFor(heroBanner.image2).url()} alt="headphone" width={555} height={555} quality={100} layout="intrinsic" />
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
                <Image src={urlFor(heroBanner.image3).url()} alt="watches" width={600} height={600} quality={100} layout="intrinsic" />
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