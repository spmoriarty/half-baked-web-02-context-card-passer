import React from 'react';
import Card from './Card';
import { useCardProvider } from './CardProvider';

export default function CardList({ cards, player }) {
  const {
    setSelectedCard, setFrom, selectedCard
  } = useCardProvider();
  return (
    <div className='card-list'>
      {
        cards.map((card => <Card 
          key={card.suit + card.value} 
          setSelectedCard={setSelectedCard} 
          selectedCard={selectedCard}
          player={player}
          setFrom={setFrom}
          card={card}
        />))
      }
    </div>
  );
}
