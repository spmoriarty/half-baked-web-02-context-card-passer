import './App.css';
// import initialCards from './cards-data';
import Player from './Player';
import CardList from './CardList';
// import { useState } from 'react';
import ExecutePassButton from './ExecutePassButton';
import { CardProvider, useCardProvider } from './CardProvider';
// import { findCardIndex } from './fetch-util'



function App() {
  
  const { deck,
    playerOneHand, 
    selectedCard, setSelectedCard,
    playerTwoHand, 
    playerThreeHand, 
    setFrom,
    to, setTo, } = useCardProvider();



  return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player player={1} hand={playerOneHand} />
        <Player to={to} player={2} hand={playerTwoHand} setFrom />
        <Player to={to} player={3} hand={playerThreeHand} />
        <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton />
        }
      </section>
    </div>
  );
}

export default App;
