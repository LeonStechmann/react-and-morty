import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Random() {
  const [randomChar, setRandomChar] = useState(null);

  const handleRandomChar = () => {
    fetch(
      `https://rickandmortyapi.com/api/character/${Math.floor(
        Math.random() * 826
      )}`
    )
      .then((response) => response.json())
      .then((data) => setRandomChar(data));
  };

  return (
    <RandomCharContainer>
      <Questionmark isEmpty={randomChar}>?</Questionmark>
      <img src={randomChar?.image} alt={randomChar?.name} />
      <h2>{randomChar?.name}</h2>
      <button onClick={handleRandomChar}>get Random character</button>
      <Link
        to={{
          pathname: "/character/" + randomChar?.id,
        }}
      >
        <button>show more</button>
      </Link>
    </RandomCharContainer>
  );
}

const Questionmark = styled.span`
  font-size: 10rem;
  text-align: center;
  ${(props) => (props.isEmpty ? "display:none" : "display:block")}
`;

const RandomCharContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  button {
    margin: 10px 0px;
  }
`;
