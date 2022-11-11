import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Card({ characters }) {
  return (
    <CardContainer>
      {characters.map((character) => {
        return (
          <article key={character.id}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <Link
              to={{
                pathname: "/character/" + character.id,
              }}
            >
              <button>show more</button>
            </Link>
          </article>
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
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h2 {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  button {
    margin-bottom: 15px;
  }
`;
