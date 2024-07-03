import React, { useState } from "react";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "./style.css";

export const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [erroSenha, setErroSenha] = useState("");

    // Manipula as mudanças dos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "senha" || name === "confirmarSenha") {
            setErroSenha(
                formData.senha !== formData.confirmarSenha
                    ? "As senhas não coincidem"
                    : ""
            );
        }
    };

    // Salva os dados no localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.senha !== formData.confirmarSenha) {
            setErroSenha("As senhas não coincidem");
            return;
        }
        localStorage.setItem("formData", JSON.stringify(formData));
        console.log("Dados do formulário enviados e salvos:", formData);
    };

    return (
        <>
            <div className="homeBg">
                <img src={homeBg} alt="" />
            </div>
            <Header />
            <Main>
                <div className="signIn">
                    <form onSubmit={handleSubmit}>
                        <h2>CADASTRO</h2>
                        <Input
                            name="nome"
                            label={"Usuário"}
                            type={"text"}
                            value={formData.nome}
                            onChange={handleChange}
                        />
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
                        >
                            <p>
                                Senha <span>(mínimo 6 caracteres)</span>
                            </p>
                        </Input>
                        <Input
                            name="confirmarSenha"
                            label={"Confirmar Senha"}
                            type={"password"}
                            value={formData.confirmarSenha}
                            onChange={handleChange}
                        >
                            <p>
                                Senha <span>(mínimo 6 caracteres)</span>
                            </p>
                        </Input>

                        <p style={{ color: "red" }}>{erroSenha}</p>
                        <ButtonSecondary type="submit">Salvar</ButtonSecondary>
                    </form>
                </div>
            </Main>
            <Footer />
        </>
    );
};

export default Cadastro;
