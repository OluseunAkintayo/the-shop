import styled from 'styled-components';
import Button from './Button';
import { MailOutline } from '@mui/icons-material'

const Container = styled.div`
  padding: 1rem;
  color: rgba(0, 0, 0, 0.7);
  background: rgba(245, 245, 245);
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: 0 0.75rem;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 1.5rem auto;
  border: 1px solid teal;
  height: 2.5rem;
`;

// 	rgb(0,128,128)
const Subscribe = () => {
  return (
    <Container>
      <Title>Subscribe to Our Newletter</Title>
      <Desc>Receive notifications about exciting offers, new arrivals, coupons and more</Desc>
      <FormContainer>
        <Input placeholder='Email address' />
        <Button style={{ height: '100%', margin: 0, border: 'none', width: '3.5rem'  }}><MailOutline /></Button>
      </FormContainer>
    </Container>
  )
};

export default Subscribe;
