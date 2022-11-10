import styled from "styled-components";

export default function Navigation() {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <a href="">Homepage</a>
        </li>
        <li>
          <a href="">Favorite</a>
        </li>
        <li>
          <a href="">Random</a>
        </li>
        <li>
          <a href="">Other</a>
        </li>
      </ul>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: white;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }
`;
