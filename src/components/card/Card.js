import styled from "styled-components";

export default function Card() {
  return (
    <CardContainer>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="Error upsi daisy"
      />
      <h2>Morty Smith</h2>
      <button>show more</button>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  h2 {
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
