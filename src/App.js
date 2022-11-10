import "./App.css";

function App() {
  return (
    <div className="App">
      <header>React and Morty</header>
      <div className="Card">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Error upsi daisy"
        />
        <h2>Morty Smith</h2>
        <button>show more</button>
      </div>
      <nav>
        <ul>
          <li>
            <div>Ph1</div>
          </li>
          <li>
            <div>Ph2</div>
          </li>
          <li>
            <div>Ph3</div>
          </li>
          <li>
            <div>Ph4</div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
