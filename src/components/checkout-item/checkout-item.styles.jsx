import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #7f7f7f;
  padding: 16px 0;

  img {
    width: 160px;
    height: 160px;
  }

  svg {
    height: 24px;
    cursor: pointer;
  }
`;

export const ItemContent = styled.div`
  width: 23%;
  font-size: 18px;

  &:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:nth-child(4),
  &:nth-child(5) {
    text-align: center;
  }

  &:last-child {
    width: 8%;
  }
`;
