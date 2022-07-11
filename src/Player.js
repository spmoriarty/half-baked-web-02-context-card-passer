import React from 'react';
import CardList from './CardList';
import { useCardProvider } from './CardProvider';

export default function Player({ player, hand }) {
  const {
    cards, setFrom, selectedCard, setSelectedCard, setTo, to
  } = useCardProvider();
  
  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}
