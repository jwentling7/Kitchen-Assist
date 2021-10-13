import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 3em 0 2em;
  text-align: center;
  border-bottom: 3px solid var(--clr-main);

  & svg {
    width: 70%;
    max-width: 350px;
  }
`;

export const HeaderNavBar = styled.ul`
  display: flex;
  gap: 2em;
  justify-content: center;
  margin-top: 3em;
  padding-left: 0;
`;

export const HeaderLink = styled.li`
  list-style-type: none;
`;
