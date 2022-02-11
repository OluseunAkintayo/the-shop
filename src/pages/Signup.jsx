import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core'
import Button from '../components/Button';

const PageWrapper = styled.section`
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg, rgba(0, 0, 0, 1), rgba(245, 245, 245, 0.6) ),
    url('https://a.cdn-hotels.com/gdcs/production88/d1000/f1fd2bd5-e90f-48fa-85d1-840e2c4ace3b.jpg'
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* https://www.incimages.com/uploaded_files/image/1920x1080/getty_663974538_353364.jpg */
`;
const FormContainer = styled.div`
  background: #fff;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
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


const Signup = () => {
  const [values, setValues] = React.useState({
    firstName: '', lastName: '', email: '', passcode_I: '', passcode_II: '', agree: false
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value, warning: null });
  };
  const onCheckboxChange = () => {
    setValues({ ...values, agree: !values.agree });
  }
  const agreementLabel = "By creating an account, you consent to processing the information supplied in this form in accordance to our Privacy Policy."

  const signup = () => {
    console.log(values)
  }

  return (
    <PageWrapper>
      <FormContainer>
        <Title>Create an account</Title>
        <Form>
            <FormItem>
              <InputLabel>First Name</InputLabel>
              <Input type="text" onChange={handleChange("firstName")} value={values.firstName} />
            </FormItem>
            <FormItem>
              <InputLabel>Last Name</InputLabel>
              <Input type="text" onChange={handleChange("lastName")} value={values.lastName} />
            </FormItem>
            <FormItem>
              <InputLabel>Email Address</InputLabel>
              <Input type="text" onChange={handleChange("email")} value={values.email} />
            </FormItem>
            <FormItem>
              <InputLabel>Password</InputLabel>
              <Input type="password" onChange={handleChange("passcode_I")} value={values.passcode_I} />
            </FormItem>
            <FormItem>
              <InputLabel>Confirm Password</InputLabel>
              <Input type="password" onChange={handleChange("passcode_II")} value={values.passcode_II} />
            </FormItem>
            <FormItem>
              <FormControlLabel control={<Checkbox onChange={onCheckboxChange} />} label={agreementLabel} />
            </FormItem>
            <FormItem>
              <Button style={{ width: '100%', background: 'teal', color: 'white' }} onClick={signup}>Sign up</Button>
            </FormItem>
        </Form>
        <FormItem>
          Already have an account? <Link to="/shop/auth" style={{ color: 'royalblue' }}>Sign in</Link>
        </FormItem>
      </FormContainer>
    </PageWrapper>
  );
};

export default Signup;