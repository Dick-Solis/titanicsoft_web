import styled from "@emotion/styled";
import { useState } from "react";
import { colors, typography } from "./styles";
import tienda from "./images/supermarket_logo.svg"
import LoginForm from "./components/login-form";

const ContainerBody = styled.div`
  margin-top: 100px;
  color: white;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
`;

const ContainerLogo = styled.div`
  border-radius: 20px;
  border-color: white;
  border-style: solid;
  ${typography.head.md};
  display: inline-block;
  padding: 50px;
`

const ContainerLogin = styled.div`
  /* background-color: ${colors.white}; */
`

const UnauthenticatedApp = () => {

  return (
    <ContainerBody>
      <ContainerLogo>
        <p>Pagina de Ventas</p>
        <img src={tienda} alt="mi-tienda" />
        <p>Supermarket Dick</p>
      </ContainerLogo>

      <ContainerLogin>
        <LoginForm/>
      </ContainerLogin>

    </ContainerBody>
  );
};

export default UnauthenticatedApp;
