import React, { useState } from "react";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Textarea from "../../components/TextArea";
import "./style.css";

export const Contato = () => {
   
    const [cadastroData, setcadastroData] = useState({
        name: '',
        email: '',
        phone: '', 
        message: '',
    });
  
    const handleChange = (e) => {
      setcadastroData({
        ...cadastroData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Dados do formulário:', cadastroData);

      alert('Formulário enviado com sucesso!');

      setcadastroData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    };

    return (
        <>
            <div className="homeBg">
            <img src={homeBg} alt="" />
            </div>
            <Header />
            <Main>
                <div className="contact">
                    <form onSubmit={handleSubmit}>
                        <h2>ENTRE EM CONTATO</h2>
                        <Input
                            name="nome"
                            label={"Usuário"}
                            type={"name"}
                            value={cadastroData.nome}
                            onChange={handleChange}
                        />
                        <Input
                            name="email"
                            label={"Email"}
                            type={"email"}
                            value={cadastroData.email}
                            onChange={handleChange}
                        />
                        <Input
                            name="phone"
                            label={"Telefone"}
                            type={"tel"}
                            value={cadastroData.phone}
                            onChange={handleChange}
                        />
                        <Textarea
                            name="mensage"
                            label="Mensagem"
                            value={cadastroData.mensagem}
                            onChange={handleChange}
                        />
                        <ButtonSecondary>Enviar</ButtonSecondary>
                    </form>
                </div>
            </Main>
            <Footer />
        </>
    );
}
