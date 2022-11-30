import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../context/auth-context";
import Input from "./input";
import { colors } from "../styles/colors";
import { typography } from "../styles";

const LoginTitle = styled.h1`
  ${typography.head.md};
  text-align: center;
  margin-bottom: 12px;
`;

const ButtonLogin = styled.button`
  color: ${colors.white};
  background-color: ${colors.blue};
  padding: 8px 16px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border: none;
  font-weight: 700;
  font-size: 1rem;
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    gmail: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const { login } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    login(formData);
  }

  return (
    <>
      <LoginTitle>Login</LoginTitle>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="gmail"
          placeholder="example@example.com"
          label="Email"
          onChange={handleChange}
          value={formData.gmail}
        />
        <Input
          type="password"
          name="password"
          placeholder="******"
          label="Password"
          onChange={handleChange}
          value={formData.password}
        />
        {}
        <ButtonLogin type="submit">Login</ButtonLogin>
      </form>
    </>
  );
};

export default LoginForm;
