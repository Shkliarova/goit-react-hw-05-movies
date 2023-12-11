import styled from "styled-components";

export const BackLink = styled.div`
  a {
    position: relative;
    padding-left: 12px;
  }

  a::before {
    content: '';
    display: block;

    border-color: #780a0f;
    border-style: solid;
    border-width: 0 0 2px 2px;
    height: 6px;
    left: 0;
    position: absolute;
    width: 6px;
    margin-top: -2px;
    top: 50%;

    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  :hover,
  :focus {
    color: #780a0f;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const MovieImg = styled.img`
  max-width: 182px;
`;

export const MovieTitle = styled.h2`
    color: #780a0f;
    font-family: 'Poppins';
    font-style: normal;
    font-size: 26px;
    margin-bottom: 12px;
`;

export const MovieSubTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const MovieDescr = styled.p`
  font-size: 16px;
  color: #424041;
  margin-bottom: 12px;
  max-width: 1000px;
`;

export const ListDescr = styled.ul`
  font-size: 16px;
  display: flex;
  gap: 18px;
  padding: 0;
  color: #780a0f;
  margin-bottom: 12px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;
`;
export const ListItem = styled.li`
    font-size: 18px;
    font-weight: 700px;

  a:hover,
  a:focus,
  a:active {
    color: #780a0f;
  }
`;

export const Title = styled.h3`
    color: #780a0f;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;`