import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import styled from "styled-components";
//Router: which page
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Character from "./pages/Character";
import Other from "./pages/Other";
import Random from "./pages/Random";
import Favorite from "./pages/Favorite";

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
      <Navigation />
      <Routes>
        <Route path="/" element={<Home characters={characters} />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/random" element={<Random />} />
        <Route path="/other" element={<Other />} />
        <Route
          path={"/character/:characterId"}
          element={<Character characters={characters} />}
        />
        <Route path="*" element={<h1>Error 404 Page not Found</h1>} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
