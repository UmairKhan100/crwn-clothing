import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 32px;

  img {
    width: 30%;
    height: 20%;
  }
`;

export const ItemName = styled.h2`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ItemQuantity = styled.span`
  color: #7f7f7f;
`;
