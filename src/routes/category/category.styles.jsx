import styled from "styled-components";

export const CategoryContainer = styled.div`
  margin: 32px 0;
`;

export const CategoryName = styled.h1`
  margin-bottom: 48px;
  letter-spacing: -1px;
  text-align: center;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;
