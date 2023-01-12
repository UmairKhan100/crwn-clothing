import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 1000px;
  margin: 32px auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #7f7f7f;
`;

export const HeaderItem = styled.span`
  width: 23%;
  font-size: 20px;
  font-weight: 500;
  padding: 16px 0;

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    text-align: center;
  }

  &:last-child {
    width: 8%;
  }
`;

export const TotalPrice = styled.span`
  font-size: 32px;
  font-weight: 600;
  display: flex;
  justify-content: flex-end;
  padding: 32px 0;
`;
