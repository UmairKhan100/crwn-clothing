import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  top: 64px;
  right: 0;
  height: 450px;
  width: 350px;
  background-color: #fff;
  z-index: 1000;
  padding: 24px;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CartItemsContainer = styled.div`
  height: 80%;
  overflow: auto;
`;

export const EmptyMessage = styled.div`
  margin: 50px auto;
  font-size: 18px;
  text-align: center;
`;
