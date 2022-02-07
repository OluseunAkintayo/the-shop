import styled from "styled-components";
import { slides } from "./data";
import Button from "./Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 92px);
  width: 100vw;
  
  @media(max-width: 625px) {
    flex-direction: column;
  }
`;

const ImgWrapper = styled.div`
  flex: 1;
  height: 100%;
  max-width: 50%;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-height: 90%;
  width: 100%;
  object-fit: contain;
`;

const InfoWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: left;
  @media(max-width: 625px) {
    text-align: center;
  }
`;

const ItemTitle = styled.h1`
  font-size: 3rem;
`;

const ItemInfo = styled.p`
  font-size: 1.25rem;
  letter-spacing: 1px;
  font-weight: 500;
  line-height: 1.75rem;
`;

export const SliderII = () => {
  return (
    <Carousel autoPlay interval="3000" infiniteLoop transitionTime="1000" showThumbs={false} showStatus={false}>
      {
        slides.map(item => (
          <Slide key={item.id}>
            <ImgWrapper><Image src={item.image} /></ImgWrapper>
            <InfoWrapper>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemInfo>{item.desc}</ItemInfo>
              <Button>Order Now</Button>
            </InfoWrapper>     
          </Slide>
        ))
      }
    </Carousel>
  )
}

export default SliderII;
