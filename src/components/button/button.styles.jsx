import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner.styles";

export const BaseButton = styled.button`
  margin: 10px 0;
  font-size: 16px;
  padding: 16px 64px;
  border: 3px solid #000;
  background-color: #000;
  text-transform: uppercase;
  color: #fff;
  font-weight: 600;
  letter-spacing: 1px;

  &:hover {
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #00f;
  color: #fff;
  padding: 16px 32px;
  border: #00f;

  &:hover {
    color: #fff;
    background-color: #00f;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #000;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

export const SpinnerButton = styled(SpinnerContainer)`
  width: 20px;
  height: 20px;
`;
