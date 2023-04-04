import styled from "styled-components";

function Button({ color, children, onClick, width }) {
  return (
    <Container color={color} onClick={onClick} width={width}>
      {children}
    </Container>
  );
}

const Container = styled.button``;
export default Button;
