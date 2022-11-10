import styled from "styled-components";

export default function Header() {
  return <Title>React and Morty</Title>;
}

const Title = styled.h1`
  background-color: hotpink;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 25px;
  margin: 0;
`;
