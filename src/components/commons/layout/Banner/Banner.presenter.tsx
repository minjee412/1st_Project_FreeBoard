import { Banner } from "./Banner.styles";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselWrapper, CarouselPicture } from "./Banner.styles";

export default function SimpleSlider() {
  const settings = {
    // dots: true, // 캐러셀의 점을 보여줄 것인지
    infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
    speed: 1000, // 넘어가는 속도는 몇으로 할 것인지
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // variableWidth:true
  };

  return (
    <Banner>
      <Slider {...settings}>
        <CarouselWrapper>
          <CarouselPicture src="/header/banner/banner1.jpg" />
        </CarouselWrapper>
        <CarouselWrapper>
          <CarouselPicture src="/header/banner/banner2.jpg" />
        </CarouselWrapper>
        <CarouselWrapper>
          <CarouselPicture src="/header/banner/banner3.jpg" />
        </CarouselWrapper>
      </Slider>
    </Banner>
  );
}
