import styled, { css } from "styled-components";

export const Card = styled.div`
  --padding: 20px;

  margin-bottom: 1em;
  width: calc(300px + calc(2 * var(--padding)));
  border: 1px solid var(--clr-main);
  border-radius: var(--border-radius);
  box-shadow: 6px 6px 8px var(--clr-font-main);
  background-color: var(--clr-main);
  color: var(--clr-font-secondary);
  cursor: pointer;
`;

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--padding);

  ${(props) =>
    props.isFlipped &&
    css`
      display: none;
    `};
`;

export const CardBack = styled.div`
  display: none;
  flex-direction: column;
  padding: var(--padding);

  ${(props) =>
    props.isFlipped &&
    css`
      display: flex;
    `}
`;

export const CardImage = styled.img`
  border-radius: var(--border-radius);
  border-radius: 50%;
`;
