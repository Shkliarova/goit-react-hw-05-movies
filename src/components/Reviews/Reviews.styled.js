import styled from "styled-components";

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ListItem = styled.li`
    font-size: 14px;
    padding: 6px;
    border: solid 1px #780a0f;
    background-color: #f5edee;
    border-radius: 15px; 

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: #780a0f;
  }
`;
export const ReviewsDescr = styled.p`
  color: #424041;
  margin: 10px 0;
`;