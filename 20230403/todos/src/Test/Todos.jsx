import { useState } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

let nextId = 4;
function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, text: "집에가고싶다1", done: false },
    { id: 2, text: "집에가고싶다2", done: false },
    { id: 3, text: "집에가고싶다3", done: false },
  ]);

  function createTodo(text) {
    setTodos(todos.concat({ id: nextId++, text: text, done: false }));
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function handleToggle(id) {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  return (
    <Container>
      <TodoHeader />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        handleToggle={handleToggle}
      />
      <TodoInput createTodo={createTodo} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 350px;
  height: 700px;
  border: 1px solid black;
  overflow: hidden;
`;

export default Todos;
