import styled from "styled-components";

export default function Card({ characters }) {
  return (
    <CardContainer>
      {characters.map((character) => {
        return (
          <>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <button>show more</button>
          </>
        );
      })}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;

  h2 {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  button {
    margin-bottom: 15px;
  }
`;
