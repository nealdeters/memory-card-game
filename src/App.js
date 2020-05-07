import React from 'react';
import GameState from './context/game/GameState.js';
import Game from './components/Game.js';

import "materialize-css/dist/css/materialize.min.css";
import './App.css';

function App() {
  return (
    <GameState>
      <Game />
    </GameState>
  );
}

export default App;
