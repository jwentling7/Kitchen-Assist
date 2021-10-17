import styled, { css } from "styled-components";

export const Card = styled.div`
  --padding: 20px;
  --width: 300px;
  --height: 500px;

  position: relative;
  margin-bottom: 1em;
  width: calc(var(--width) + calc(2 * var(--padding)));
  height: calc(var(--height) + calc(2 * var(--padding)));
  border: 1px solid var(--clr-main);
  border-radius: var(--border-radius);
  box-shadow: 6px 6px 8px var(--clr-font-main);
  background-color: var(--clr-main);
  color: var(--clr-font-secondary);
  overflow: none;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.3, 0.85, 0.55, 1.4);
  transform-style: preserve-3d;

  ${({ isFlipped }) =>
    isFlipped &&
    css`
      box-shadow: -6px 6px 8px var(--clr-font-main);
      transform: rotateY(180deg);
    `}
`;

export const CardFront = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: var(--width);
  height: var(--height);
  padding: var(--padding);

  backface-visibility: hidden;
`;

export const CardBack = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  overflow-y: auto;

  backface-visibility: hidden;
  transform: rotateY(180deg);

  &::-webkit-scrollbar {
    width: 0.8em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px var(--clr-font-secondary);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-font-secondary);
    outline: 1px solid var(--clr-main);
  }

  ${({ isFlipped }) =>
    !isFlipped &&
    css`
      overflow: hidden;
    `}
`;

export const CardImage = styled.img`
  border-radius: var(--border-radius);
  border-radius: 50%;
`;

export const Ingredient = styled.li`
  padding: 0 0 0.5em 0.75em;

  &::marker {
    content: "\f0c8";
    font-family: "Font Awesome 5 Free";
    font-size: 0.8em;
  }
`;
