import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  cursor: pointer;
  grid-column: auto / span 2;
  border: 1px solid #000;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:nth-child(4),
  &:nth-child(5) {
    grid-column: auto / span 3;
    height: 360px;
  }
`;

export const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-position: center;
  background-size: cover;

  &:hover {
    opacity: 0.9;
  }
`;

export const BodyContainer = styled.div`
  position: absolute;
  border: 1px solid #000;
  background-color: rgba(255, 255, 255, 0.8);
  height: 140px;
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  h2 {
    text-transform: uppercase;
    letter-spacing: -0.5px;
  }

  span {
    font-size: 18px;
  }
`;
