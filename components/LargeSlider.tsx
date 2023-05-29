'use client';
import Image from 'next/image';
import React, { Component } from 'react';
import SimpleSlider from 'react-slick';
import houseImage1 from '@public/images/housetest1.jpg';
import houseImage2 from '@public/images/housetest2.jpg';
import houseImage3 from '@public/images/housetest3.jpg';
import houseImage4 from '@public/images/housetest4.jpg';

export default class LargeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div>
        <SimpleSlider {...settings}>
          <div>
            <Image
              src={houseImage1}
              alt='Casa'
              className='card-img-slider-2'
              width={400}
              height={330}
            />
          </div>
          <div>
            <Image
              src={houseImage2}
              alt='Casa'
              className='card-img-slider-2'
              width={400}
              height={330}
            />
          </div>
          <div>
            <Image
              src={houseImage3}
              alt='Casa'
              className='card-img-slider-2'
              width={400}
              height={330}
            />
          </div>
          <div>
            <Image
              src={houseImage4}
              alt='Casa'
              className='card-img-slider-2'
              width={400}
              height={330}
            />
          </div>
        </SimpleSlider>
      </div>
    );
  }
}
