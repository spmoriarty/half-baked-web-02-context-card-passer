import { createContext, useContext, useState } from 'react';
import initialCards from './cards-data';

const CardContext = createContext();

export function CardProvider({ children }) {
// const state arguments here


  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  // collect states here


  const allState = {
    deck, setDeck,
    playerOneHand, setPlayerOneHand,
    selectedCard, setSelectedCard,
    playerTwoHand, setPlayerTwoHand,
    playerThreeHand, setPlayerThreeHand,
    from, setFrom,
    to, setTo,

  };

  return <CardContext.Provider value={allState}>
    {children}
  </CardContext.Provider>;
}

export function useCardProvider() {
    
  return useContext(CardContext);
}
