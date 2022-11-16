import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavigationContainer>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>Homepage</span>
            </Link>
          </li>
          <li>
            <Link to="/Favorite">
              <span>Favorite</span>
            </Link>
          </li>
          <li>
            <Link to="/Random">
              <span>Random</span>
            </Link>
          </li>
          <li>
            <Link to="/Other">
              <span>Other</span>
            </Link>
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

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 1em;
  }
  span {
    color: white;
  }
`;
