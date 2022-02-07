import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import styled from "styled-components";

const FooterContainer = styled.footer`
  color: rgba(0,0,0,0.7);
  padding: 1rem;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  @media(max-width: 625px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  @media(max-width: 625px) {
    text-align: center;
  }
`;

const Logo = styled.h1`
  
`;

const Socials = styled.div`
  display: flex;
  margin: 1rem 0;
  @media(max-width: 625px) {
    justify-content: center;
  }
`;
const SocialIcon = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  color: teal;
  border: 1px solid teal;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: white;
    background: teal;
    transform: scale(1.15);
  }
`;

const Right = styled.div`
  flex: 1;
  @media(max-width: 625px) {
    margin: 1rem 0;
    * {
      text-align: center !important;
    }
  }
`;

const Title = styled.h3`
  text-align: right;
`;

const List = styled.div`
  margin: 1rem 0;
  span {
    display: block;
    text-align: right;
    padding: 0.375rem 0;
    margin: 0.25rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      /* background-color: rgba(0,0,0,0.1); */
      text-decoration: underline;
    }
  }
`;

const Bottom = styled.div`
  flex: 1;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0.75rem 0;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid teal;
`;

const Footer = () => {
  return(
    <FooterContainer>
      <Container>
        <Left>
          <Logo>The Shop</Logo>
          <Socials>
            <SocialIcon>
              <Facebook />
            </SocialIcon>
            <SocialIcon>
              <Twitter />
            </SocialIcon>
            <SocialIcon>
              <Instagram />
            </SocialIcon>
          </Socials>
        </Left>
        <Right>
          <Title>Useful Links</Title>
          <List>
            <span>Upcoming Offers</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </List>
        </Right>
      </Container>
      <Bottom>
        <code>&copy; TechyDNA { new Date().getFullYear() }</code>
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;