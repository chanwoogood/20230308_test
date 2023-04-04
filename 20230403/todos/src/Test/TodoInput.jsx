import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

function TodoInput({ createTodo }) {
  const [text, setText] = useState("");
  return (
    <Container>
      <input onChange={(e) => setText(e.target.value)} />
      <Button width="100%" onClick={() => createTodo(text)}>
        edit
      </Button>
    </Container>
  );
}

const slideUp = keyframes`
    from {
        transform: translateY(100%);
        opacity: 0;
    }
`;

const Container = styled.div`
  padding: 10px;
  border-top: 1px solid black;
  form {
    input {
      width: 100%;
      margin-bottom: 4px;
      outline: none;
      padding: 5px;
      animation-name: ${slideUp};
      animation-duration: 0.4s;
    }
  }
`;

export default TodoInput;
