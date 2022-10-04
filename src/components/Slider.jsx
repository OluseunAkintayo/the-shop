import styled from "styled-components";
import { Button } from '@mui/material';
import { Carousel } from 'react-bootstrap';


const Container = styled.section`
  padding-top: 4rem;
  @media(max-width: 625px) {
    position: relative;
    top: 60px;
  }
  .btn {
    background: transparent;
    width: 7.5rem;
    height: 2.5rem;
    outline: none;
    margin: 1rem 0;
    border: 1px solid teal;
    font-weight: 300;
    color: teal;
    transition: ease-in-out 0.2s;
    &:hover {
      background-color: teal;
      color: whitesmoke;
    }
  }
  .carousel-indicators button {
    background: rgba(0, 0, 0, 0.5);
    transform: scale(0.5);
  }

`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: calc(80vh - 92px);
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
  justify-content: center;
`;

const Image = styled.img`
  max-height: 80%;
  width: auto;
  max-width: 100%;
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
  font-size: 1.5rem;
`;

const ItemInfo = styled.p`
  font-size: 1.125rem;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.25rem;
`;

const Slider = () => {
  const slides = [
    {
      id: 1,
      title: "Nike Hoodie",
      desc: "100% Cotton-made hoodie. It is unisex and comes in different sizes.",
      image: "/img/nike-hoodie.jpg"
    },
    {
      id: 2,
      title: "Air Jordan Sneakers",
      desc: "Super comfy footwear for casual outings",
      image: "/img/jordans.jpg"
    },
    {
      id: 3,
      title: "Wireless Charger",
      desc: "Experience super-fast wireless charging for smartphones.",
      image: "/img/wireless-charger.jpg"
    },
  ];

  return (
    <Container id="sliderContainer">
        <Carousel>
          {
            slides.map(item => (
              <Carousel.Item key={item.id} interval={3500}>
                <Slide>
                  <ImgWrapper><Image src={item.image} /></ImgWrapper>
                  <InfoWrapper>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemInfo>{item.desc}</ItemInfo>
                    <Button className="btn">
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

export default Slider;