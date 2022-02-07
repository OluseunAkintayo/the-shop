import styled from "styled-components";

const Container = styled.section`
  height: 2rem;
  background: teal;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  position: relative;
`;

const Close = styled.span`
  position: absolute;
  right: 0;
  cursor: pointer;
  padding: 0 0.375rem;
`;

const Broadcast = () => {
  return (
    <Container>
      Amazing deals! Free shipping on orders over $100.
      <Close>X</Close>
    </Container>
  );
};

export default Broadcast;
