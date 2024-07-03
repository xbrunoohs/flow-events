import React, { useState, useEffect } from "react";
import homeBg from "../../assets/home/background.png";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";

export default function Storage() {
    const [storageData, setStorageData] = useState([]);

    useEffect(() => {
        loadDataFromStorage();
    }, []);

    const loadDataFromStorage = () => {
        const data = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            data.push({ key, value });
        }
        setStorageData(data);
    };

    const handleDelete = () => {
        localStorage.clear();
        setStorageData([]);
    };

    return (
        <>
            <div className="homeBg">
                <img src={homeBg} alt="" />
            </div>
            <Header />
            <Main>
                <div className="storage">
                    {storageData.length === 0 ? (
                        <p className="mensagem-localstorage">Nenhum dado encontrado</p>
                    ) : (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Chave</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {storageData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.key}</td>
                                            <td>{item.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <ButtonSecondary type="button" onClick={handleDelete}>Deletar</ButtonSecondary>
                        </>
                    )}
                </div>
            </Main>
            <Footer />
        </>
    );
}
