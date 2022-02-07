import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  cursor: pointer;
  padding: 0.75rem 1rem;
  outline: none;
  margin: 1rem 0;
  border: 1px solid teal;
  font-weight: 500;
  color: teal;
  transition: ease-in-out 0.2s;
  &:hover {
    background-color: teal;
    color: whitesmoke;
  }
`;

export default Button;