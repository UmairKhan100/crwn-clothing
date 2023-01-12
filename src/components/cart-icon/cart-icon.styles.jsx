import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  height: 32px;
  width: 32px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 14px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 0);
`;
