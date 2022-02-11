import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const PageWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    45deg, rgba(0, 0, 0, 1), rgba(245, 245, 245, 0.6) ),
    url('https://media.istockphoto.com/photos/two-young-girl-friends-in-safety-medical-masks-during-shopping-in-the-picture-id1289001850?b=1&k=20&m=1289001850&s=170667a&w=0&h=C_ozZ6wIUEWl0Coj4UBYOj-Wjv3zsu7FB6Z6vCA7-aQ='
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media(max-width: 625px) {
    justify-content: center;
  }
`;
const FormContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  margin: 1rem;
`;
const Form = styled.div``;
const Title = styled.h1`
  margin: 1rem 1rem 2rem 0;
  color: rgba(0,0,0,0.5);
`;
const FormItem = styled.div`
  margin-bottom: 1rem;
  color: rgba(0,0,0,0.5);
`;
const InputLabel = styled.h5`
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  width: calc(100% - 1rem);
  padding: 0.5rem;
  outline: 1px solid teal;
  border: transparent;
  &:focus {
    border: 1px solid teal;

  }
`;
const Agreement = styled.span``;


const Login = () => {
  return (
    <PageWrapper>
      <FormContainer>
        <Title>Login</Title>
        <Form>
          <FormItem>
            <InputLabel>Username or Email</InputLabel>
            <Input type="email" />
          </FormItem>
          <FormItem>
            <InputLabel>Password</InputLabel>
            <Input type="password" />
          </FormItem>
          <FormItem>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormItem>
          <FormItem>
              <Button style={{ width: '100%', background: 'teal', color: 'white' }}>Login</Button>
            </FormItem>
        </Form>
      </FormContainer>
    </PageWrapper>
  );
};

export default Login;