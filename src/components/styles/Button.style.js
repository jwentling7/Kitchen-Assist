import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 0.8em 1.2em;
  border: 1px solid var(--clr-main);
  border-radius: var(--border-radius);

  // primary button
  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--clr-main);
      color: var(--clr-font-secondary);
      &:active,
      &:hover {
        background-color: var(--clr-secondary);
        color: var(--clr-font-main);
      }
    `}

  // secondary button
  ${({ secondary }) =>
    secondary &&
    css`
      &:active,
      &:hover {
        background-color: var(--clr-secondary);
        color: var(--clr-font-main);
      }
    `}

    // delete button
    ${({ trash }) =>
    trash &&
    css`
      background-color: var(--clr-warning);
      color: var(--clr-font-secondary);

      &:active,
      &:hover {
        background-color: var(--clr-warning-dark);
        color: var(--clr-font-secondary);
      }
    `}
`;
