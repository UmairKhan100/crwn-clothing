import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PaymentButton = styled(Button)`
  margin: 20px auto;
`;
