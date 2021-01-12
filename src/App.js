import Articles from "./screen/components/Articles";
import Sliders from "./screen/components/Sliders";
import "./App.css";
import { useState } from "react";

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <header>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">LOGO</a>
            </li>
          </ul>
          <ul>
            <li onClick={() => setShowComponent(true)}>Sliders</li>
            <li onClick={() => setShowComponent(false)}>Articles</li>
          </ul>
        </nav>
      </header>
      {showComponent ? <Sliders /> : <Articles />}
    </div>
  );
}

export default App;
