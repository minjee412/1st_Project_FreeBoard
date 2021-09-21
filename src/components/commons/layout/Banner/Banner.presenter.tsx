import {Banner} from './Banner.styles';
import React from "react";
import Slider from "react-slick";
import {CarouselWrapper, CarouselPicture1, CarouselPicture2, CarouselPicture3, CarouselPicture4, CarouselPicture5} from './Banner.styles'
 

export default function SimpleSlider() {
    var settings = {
        // dots: true, // 캐러셀의 점을 보여줄 것인지
        infinite: true, // 마지막 장 다음에 첫번째가 나오게 할 것인지
        speed: 1000, // 넘어가는 속도는 몇으로 할 것인지
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        variableWidth:true
      };

    return(
        
        <Banner>
            <Slider {...settings}>
                <CarouselWrapper>
                    <CarouselPicture1 />
                </CarouselWrapper>
                <CarouselWrapper>
                    <CarouselPicture2 />
                </CarouselWrapper>
                <CarouselWrapper>
                    <CarouselPicture3 />
                </CarouselWrapper>
                <CarouselWrapper>
                    <CarouselPicture4 />
                </CarouselWrapper>
                <CarouselWrapper>
                    <CarouselPicture5 />
                </CarouselWrapper>
                
            </Slider>
        </Banner>
        
    )

}
