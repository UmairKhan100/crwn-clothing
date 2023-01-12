import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
`;
