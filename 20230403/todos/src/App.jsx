import Todos from "./Test/Todos";
import styled from "styled-components";

export default function App() {
  return (
    <Container>
      <Todos />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;
