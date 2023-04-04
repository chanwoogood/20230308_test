import React from "react";
import Button from "./Button";
import styled, { css } from "styled-components";

function TodoList({ todos, removeTodo, handleToggle }) {
  const itemList = todos.map((todo) => (
    <TodoItem
      removeTodo={removeTodo}
      key={todo.id}
      handleToggle={handleToggle}
      style={{ textDecoration: todo.done && "line-through" }}
      todo={todo}
    />
  ));

  return (
    <div>
      <ItemList>{itemList}</ItemList>
    </div>
  );
}

function TodoItem({ text, todo, removeTodo }) {
  return (
    <ItemBox>
      {todo.text}
      <ContentWrapper>
        <span>{text}</span>
        <Button onClick={() => removeTodo(todo.id)}>삭제</Button>
      </ContentWrapper>
    </ItemBox>
  );
}
const ItemList = styled.ul``;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin: 0;
  padding: 0;

  span {
    text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  }
`;
const ItemBox = styled.li`
  border-bottom: 1px solid black;
  list-style: none;
`;

export default React.memo(TodoList);
