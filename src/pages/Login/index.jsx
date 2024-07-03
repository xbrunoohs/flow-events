import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(formData));
    console.log("Dados do formulário enviados e salvos:", formData);
    // TODO: Adicionar lógica de login
    navigate("/feed/felipe");
  };

  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <h2>LOGIN</h2>
            <Input
              name="email"
              label={"Email"}
              type={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              name="senha"
              label={"Senha"}
              type={"password"}
              value={formData.senha}
              onChange={handleChange}
            />
            <ButtonSecondary type="submit">Avançar</ButtonSecondary>
          </form>
        </div>
      </Main>
      <Footer />
    </>
  );
}
