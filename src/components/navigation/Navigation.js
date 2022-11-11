import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavigationContainer>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/Favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/Other">Other</Link>
          </li>
          <li>
            <Link to="/Random">Random</Link>
          </li>
        </ul>
      </nav>
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
