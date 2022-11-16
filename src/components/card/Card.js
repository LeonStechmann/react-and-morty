import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Card({ characters }) {
  return (
    <CardContainer>
      {characters.map((character) => {
        return (
          <article key={character.id}>
            <Link
              to={{
                pathname: "/character/" + character.id,
              }}
            >
              <img src={character.image} alt={character.name} />

              {/* <button>show more</button> */}
            </Link>
            <h2>{character.name}</h2>
          </article>
        );
      })}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 100px;
  justify-content: center;
  align-items: center;
  margin: 30px 0 100px 0;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    border-radius: 50px;
    cursor: pointer;

    :hover {
      transition: ease-in-out 0.3s;
      filter: blur(3px);
      transform: scale(104%);
    }
  }
  h2 {
    text-align: center;
    padding: 0;
    margin: 0;
    color: white;
    margin: 20px 0 20px 0;
  }
`;
