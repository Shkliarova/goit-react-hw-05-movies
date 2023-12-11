import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 12px;
`;

export const NavItem = styled.li`
  a:hover,
  a:focus {
    color: #780a0f;
  }
`;