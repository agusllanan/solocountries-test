'use client';
import Image from 'next/image';
import React, { Component } from 'react';
import SimpleSlider from 'react-slick';
import houseImage1 from '@public/images/housetest1.jpg';
import houseImage2 from '@public/images/housetest2.jpg';
import houseImage3 from '@public/images/housetest3.jpg';

export default class ImageSlider extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <SimpleSlider {...settings}>
          <Image
            src={houseImage1}
            className='card-img-slider'
            alt='Casa'
            width={440}
            height={330}
            quality={100}
          />
          <Image
            src={houseImage2}
            alt='Casa'
            className='card-img-slider'
            width={440}
            height={330}
            quality={100}
          />
          <Image
            src={houseImage3}
            className='card-img-slider'
            alt='Casa'
            width={440}
            height={330}
            quality={100}
          />
        </SimpleSlider>
      </div>
    );
  }
}
