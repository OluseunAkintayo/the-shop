import styled from "styled-components";
import { slides } from "./data";
import Button from "./Button";
import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'react-bootstrap';


const Container = styled.section`
  @media(max-width: 625px) {
    position: relative;
    top: 60px;
  }
`;
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
    <Container>
      <Carousel>
        {
          slides.map(item => (
            <Carousel.Item key={item.id} interval={2500}>
              <Slide>
                <ImgWrapper><Image src={item.image} /></ImgWrapper>
                <InfoWrapper>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemInfo>{item.desc}</ItemInfo>
                  <Button style={{ fontWeight: 300 }}>
                    <a href="#products">Order Now</a>
                  </Button>
                </InfoWrapper>     
              </Slide>
            </Carousel.Item>
          ))
        }
      </Carousel>
    </Container>
  )
}

export default SliderII;