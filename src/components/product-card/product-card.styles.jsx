import styled from "styled-components";

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-position: center;
  background-size: cover;
`;

export const ProductCardContainer = styled.div`
  height: 350px;
  position: relative;
  cursor: pointer;

  button {
    position: absolute;
    width: 70%;
    bottom: 30px;
    transform: translate(-50%, 0);
    left: 50%;
    display: none;
  }

  &:hover {
    ${BackgroundImage} {
      opacity: 0.85;
    }

    button {
      opacity: 0.9;
      display: block;
    }
  }
`;

export const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 0;
  padding-right: 20px;
  font-weight: 500;
  color: #343434;
`;
