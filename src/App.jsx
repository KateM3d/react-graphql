import "./App.css";
import Character from "./components/Character";
import { Route, Routes } from "react-router-dom";
import { CharactersList } from "./components/CharactersList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
