import styled from "styled-components";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Character({
  characters,
  favorite,
  handleToggleFavorite,
}) {
  const [showMore, setShowMore] = useState(false);

  let { characterId } = useParams();

  const handleToggleMore = () => {
    setShowMore(!showMore);
  };

  const result = characters.find(({ id }) => id === Number(characterId));

  return (
    <CharactersContainer>
      <StyledButton
        isFavourite={favorite.includes(characterId)}
        onClick={() => handleToggleFavorite(characterId)}
      >
        Save as favorite
      </StyledButton>
      <img src={result.image} alt={result.name} />
      <button onClick={handleToggleMore}>show more</button>
      <MoreInformation showMore={showMore}>
        <ul>
          <li>species: {result.species}</li>
          <li>gender: {result.gender}</li>
          <li>status: {result.status}</li>
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
