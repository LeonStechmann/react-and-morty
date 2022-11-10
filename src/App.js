import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, []);
  return (
    <AppContainer>
      <Header />
      <Card characters={characters} />
      <Navigation />
    </AppContainer>
  );
}

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
