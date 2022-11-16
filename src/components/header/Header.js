import styled from "styled-components";

export default function Header() {
  return (
    <Title>
      React <span>and</span> Morty
    </Title>
  );
}

const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 5rem;
  margin: 70px 0 70px 0;
  font-family: "Rick-and-Morty";
  color: turquoise;
  text-shadow: -2px -2px 3px lightgreen, 2px 2px 5px lightgreen;
  -webkit-text-stroke: 0.01px black;

  span {
    font-size: 3rem;
  }
`;
