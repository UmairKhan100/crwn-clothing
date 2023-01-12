import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

// $sub-color: grey;
// $main-color: black;

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

// @mixin shrinkLabel {
// top: -14px;
// font-size: 12px;
// color: $main-color;
// }

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

// .form-input-group {
// position: relative;
// margin: 45px 0;

//   input[type="password"] {
//     letter-spacing: 0.3em;
//   }

export const InputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${ShrinkLabel}
  }
`;

//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }

export const InputField = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    ${ShrinkLabel}
  }
`;

//   .form-input-field {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }
