import { Facebook, Instagram, Twitter } from "react-feather";
import styled from "styled-components";

const FooterContainer = styled.footer`
  color: rgba(0,0,0,0.7);
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media(max-width: 375px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  color: rgba(0,0,0,0.6);
  font-weight: 500;
  font-size: 1.5rem;
`;

const Socials = styled.div`
  display: flex;
  margin: 1rem 0;
  @media(max-width: 625px) {
    justify-content: center;
  }
`;
const SocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
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
    transform: scale(1.2);
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  font-size: 0.8rem;
  a:hover {
    color: teal !important;
  }
`;

const Footer = () => {
  return(
    <FooterContainer>
      <Container>
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
      </Container>
      <Bottom>
        <p>Developed by<br /><a href="https://techydna.com">TechyDNA</a> &copy; { new Date().getFullYear() }</p>
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;