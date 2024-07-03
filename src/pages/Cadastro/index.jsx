import React, { useState, useEffect } from "react";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "./style.css";

export const Cadastro = () => {
    const [cadastroData, setcadastroData] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    });

    const [erroSenha, setErroSenha] = useState("");
    const [storageData, setStorageData] = useState([]);

    useEffect(() => {
        const data = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            data.push({ key, value });
        }
        setStorageData(data);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setcadastroData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === "senha" || name === "confirmarSenha") {
            setErroSenha(
                cadastroData.senha !== cadastroData.confirmarSenha
                    ? "As senhas não coincidem"
                    : ""
            );
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cadastroData.senha !== cadastroData.confirmarSenha) {
            setErroSenha("As senhas não coincidem");
            return;
        }
        localStorage.setItem("cadastroData", JSON.stringify(cadastroData));
        console.log("Dados do formulário enviados e salvos:", cadastroData);

        // Atualizar os dados do localStorage na tabela
        const data = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            data.push({ key, value });
        }
        setStorageData(data);
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
                            name="senha"
                            label={"Senha"}
                            type={"password"}
                            value={cadastroData.senha}
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
                            value={cadastroData.confirmarSenha}
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
