import styled from "styled-components";

export const ListFilms = styled.ul`
  margin-top: 12px;
`;
export const ItemFilms = styled.li`
  font-weight: 400;
  font-size: 20px;
  color: #424041;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #f5edee;
    color: #780a0f;
  }

  a {
    display: block;
    padding: 16px 16px;
  }
`;