import Image from 'next/image';
import React, { Component } from 'react';
import SimpleSlider from 'react-slick';
import houseImage1 from '@public/images/housetest1.jpg';
import houseImage2 from '@public/images/housetest2.jpg';
import houseImage3 from '@public/images/housetest3.jpg';

export default class ImageSlider extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <SimpleSlider {...settings}>
          <div>
            <Image
              src={houseImage1}
              className='card-img-slider-2'
              alt='Casa'
              width={500}
              height={384}
            />
          </div>
          <div>
            <Image
              src={houseImage2}
              className='card-img-slider-2'
              alt='Casa'
              width={500}
              height={384}
            />
          </div>
          <div>
            <Image
              src={houseImage3}
              className='card-img-slider-2'
              alt='Casa'
              width={500}
              height={384}
            />
          </div>
        </SimpleSlider>
      </div>
    );
  }
}
