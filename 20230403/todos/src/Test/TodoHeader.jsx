import React, { useEffect } from "react";
import styled from "styled-components";

function TodoHeader({ undoneCount }) {
  const dateStr = new Date().toLocaleDateString("ko-KR", {
    dateStyle: "full",
  });

  useEffect(() => {
    console.log("현재 날짜, 시간");
  });
  return (
    <Container>
      <h2>{dateStr}</h2>
      <p>해야할 일 : {undoneCount}</p>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export default React.memo(TodoHeader);
