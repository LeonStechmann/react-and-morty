import "./App.css";
import Header from "./components/header/Header";
import Card from "./components/card/Card";
import Navigation from "./components/navigation/Navigation";
import styled from "styled-components";

export default function App() {
  return (
    <AppContainer>
      <Header />
      <Card />
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
