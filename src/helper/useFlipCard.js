import { useEffect, useState } from "react";

export default function useFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped((currState) => !currState);
  };

  useEffect(() => {
    console.log(isFlipped);
  }, [isFlipped]);

  return { isFlipped, flipCard };
}
