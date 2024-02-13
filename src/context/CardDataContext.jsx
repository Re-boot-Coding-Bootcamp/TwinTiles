import { createContext, useState } from "react";
import { generateCardData } from "../utils";

const CardDataContext = createContext();

const CardDataContextProvider = ({ children }) => {
  const numberOfCards = 36;
  const [cardData, setCardData] = useState(generateCardData(numberOfCards));
  const [flippedCard, setFlippedCard] = useState(null);

  console.log(cardData);
  console.log(flippedCard);

  const handleCardClick = (card) => {
    if (flippedCard) {
      if (flippedCard.imageUrl === card.imageUrl) {
        // match
        const updatedCardData = cardData.map((cardItem) => {
          if (cardItem.id === card.id || cardItem.id === flippedCard.id) {
            return {
              ...cardItem,
              isMatched: true,
            };
          }
          // return the cardItem as is
          return cardItem;
        });

        setCardData(updatedCardData);
      } else {
        // no match
        // reset the data back to original
        const updatedCardData = cardData.map((cardItem) => {
          return {
            ...cardItem,
            isFlipped: false,
          };
        });

        setCardData(updatedCardData);
      }
      // rest
      setFlippedCard(null);
    } else {
      const updatedCardData = cardData.map((cardItem) => {
        if (cardItem.id === card.id) {
          return {
            ...cardItem,
            isFlipped: !cardItem.isFlipped,
          };
        }
        // return the cardItem as is
        return cardItem;
      });

      setCardData(updatedCardData);
      setFlippedCard(card);
    }
  };

  return (
    <CardDataContext.Provider
      value={{
        numberOfCards,
        cardData,
        handleCardClick,
      }}
    >
      {children}
    </CardDataContext.Provider>
  );
};

export { CardDataContextProvider, CardDataContext };
