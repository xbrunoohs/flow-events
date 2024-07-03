import React from "react";
import flowLogo from "../../assets/flow-logo-big.svg";
import homeBg from "../../assets/home/background.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";
import ProductText from "./ProductText";
import flowPhone from "../../assets/product/iphonescreen1.png";

export const Product = () => {
  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <div className="flowImgLogoStyle">
          <img className="flowImgLogo" src={flowLogo} alt="Entre no flow" />
        </div>

        <div className="productAboutUs">
          <p>
            <h1>NOSSO PRODUTO</h1>
          </p>

          <div className="productInfoBox">
            <img
              className="productPhoneImage"
              src={flowPhone}
              alt="failed"
            />

            <div className="productText">
              <ProductText title={"PROBLEMA"} content={"A falta de acesso a informações consolidadas e centralizadas dificulta a busca por opções de lazer. Isso afeta a capacidadede tomar decisões informadas e aproveitar ao máximo as atividades e oportunidades disponíveis na cidade. Isso não apenas limita as experiências de lazer, mas também contribuipara a sensação de desconexão e frustração, destacando a necessidade de soluções que simplifiquem e centralizem o acesso a informações sobre eventos na comunidade."}/>
              <ProductText title={"PROPOSTA"} content={"Desenvolver um website que centraliza informações sobre shows, eventos e atrações, incorporando avaliações e média de preços, ofereceria uma solução eficaz para a dificuldade de encontraropções de lazer. Essa plataforma abrangente simplificaria a busca por eventos, permitindo aos usuários filtrar por preferências específicas. Além disso, funcionalidades de avaliações e média de preços promoveriam a transparência e o engajamento com a comunidade, proporcionando uma experiência mais rica e satisfatória para os usuários, ao mesmo tempo em que impulsiona o apoio a eventos locais e estimula a economia regional."}/>
              <ProductText title={"OBJETIVO"} content={"Buscamos garantir uma experiência facilitada para os usuários acessarem informações sobre eventos, com o objetivo de tornar a busca por diversão mais prática e eficiente. Além de proporcionar praticidade imediata, nossa plataforma visa contribuir para a formação de uma comunidade engajada, conectada e enriquecida culturalmente. Queremos oferecer um meio intuitivo para os usuários explorarem diversas opções de lazer, fortalecendo assim os laços sociais e a vitalidade da comunidade local."}/>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
