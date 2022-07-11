import React from 'react';
import { useCardProvider } from './CardProvider';

const suitMap = {
  hearts: '❤️',
  spades: '♠️',
  clubs: '♣️',
  diamonds: '♦️',
};

export default function Card({ card, player }) {
  function handleCardClick() {
    setFrom(player);
    setSelectedCard(card);
  }
  const {
    selectedCard, setSelectedCard, setFrom
  } = useCardProvider();
  
  // if there IS a selected card, and it has the same value and suit as THIS card, style it differently
  const thisIsTheSelectedCard = selectedCard && selectedCard.value === card.value && selectedCard.suit === card.suit;

  return (
    <div className={`${thisIsTheSelectedCard ? 'selected' : ''} card`} 
      onClick={handleCardClick}>
      <div>{suitMap[card.suit]}</div>
      <div>{card.value}</div>
    </div>
  );
}
