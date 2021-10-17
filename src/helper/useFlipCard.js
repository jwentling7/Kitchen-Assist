import { useState } from "react";

export default function useFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((currState) => !currState);
  };

  return { isFlipped, flipCard };
}
