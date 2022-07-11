import React from 'react';
import Card from './Card';
import { useCardProvider } from './CardProvider';

export default function ExecutePassButton({ passCard, selectedCard }) {

  const {
    from, to
  } = useCardProvider();

  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}
