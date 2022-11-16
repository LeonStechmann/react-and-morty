import styled from "styled-components";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Character({ favorite, handleToggleFavorite }) {
  const [showMore, setShowMore] = useState(false);
  const [character, setCharacter] = useState({});
  let { characterId } = useParams();

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/" + characterId
      );
      const data = await response.json();
      setCharacter(data);
    }
    fetchCharacter();
  }, []);

  return (
    <CharactersContainer>
      <StyledButton
        isFavourite={favorite.includes(characterId)}
        onClick={() => handleToggleFavorite(characterId)}
      >
        Save as favorite
      </StyledButton>
      <img src={character.image} alt={character.name} />
      <button onClick={handleToggleMore}>show more</button>
      <MoreInformation showMore={showMore}>
        <ul>
          <li>species: {character.species}</li>
          <li>gender: {character.gender}</li>
          <li>status: {character.status}</li>
        </ul>
      </MoreInformation>
    </CharactersContainer>
  );
}

const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

const StyledButton = styled.button`
  ${(props) => props.isFavourite && "background-color: green"};
`;

const MoreInformation = styled.div`
  ${(props) => !props.showMore && "display: none"};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
