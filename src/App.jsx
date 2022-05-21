import "./App.css";
import Character from "./components/Character";
import { Route, Routes } from "react-router-dom";
import { CharactersList } from "./components/CharactersList";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList />} />
        <Route strict exact path="/search" element={<Search />} />
        <Route strict exact path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
