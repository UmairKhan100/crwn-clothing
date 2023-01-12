import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  margin-bottom: 80px;

  h2 {
    margin-bottom: 24px;
  }
`;

export const CategoryLink = styled(Link)`
  font-size: 24px;
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 50px;
`;
