import React from "react";
import homeCardReview1 from "../../assets/about/about-card-review-1.png";
import homeCardReview2 from "../../assets/about/about-card-review-2.png";
import homeCardReview3 from "../../assets/about/about-card-review-3.png";
import homeCardReview4 from "../../assets/about/about-card-review-4.png";
import flowLogo from "../../assets/flow-logo-big.svg";
import homeBg from "../../assets/home/background.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";

export const Sobre = () => {
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

        <div className="aboutAboutUs">
          <p>
            <h1>SOBRE NÓS</h1>
          </p>

          <div className="aboutInfoBox">
            <p>
            A Flõw é uma empresa apaixonada por conectar pessoas a eventos excepcionais. Surgiu da necessidade de simplificar a busca por experiências memoráveis. Sua plataforma oferece acesso intuitivo a uma ampla gama de eventos, cuidadosamente selecionados para atender a diferentes interesses. Valorizam qualidade, autenticidade e priorizam a segurança dos usuários. Comprometidos em proporcionar momentos únicos, a Flow acredita que cada evento é uma oportunidade para criar memórias duradouras e conexões significativas.
            <br />
            <br />
            Nosso compromisso com a excelência é evidenciado pela ênfase que damos à qualidade e autenticidade de cada evento que integra nossa plataforma. Valorizamos a diversidade e a singularidade, reconhecendo que cada indivíduo tem gostos e preferências únicos. Acreditamos que a experiência de participar de um evento vai além do momento presente; é a criação de memórias duradouras e a construção de conexões que perduram.
            <br />
            <br />
            Na Flow, a segurança dos nossos usuários é prioridade absoluta. Implementamos medidas rigorosas para garantir que cada interação, desde a descoberta do evento até a participação, seja segura e confiável. Estamos empenhados em proporcionar momentos únicos e inesquecíveis, acreditando que cada evento é uma oportunidade para criar memórias que transcendem o comum.
            <br />
            <br />
            Seja bem-vindo à Flow, agilizando seu rolê!
            </p>

            <div className="aboutIconContainer">
              <div class="aboutIcon">
                <img src={homeCardReview1} alt="icon1" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview2} alt="icon2" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview3} alt="icon3" />
              </div>
              <div class="aboutIcon">
                <img src={homeCardReview4} alt="icon4" />
              </div>
            </div>

            <div className="aboutIconContainer">
              <div class="aboutIconText">Bruno H</div>
              <div class="aboutIconText">Felipe B</div>
              <div class="aboutIconText">André L</div>
              <div class="aboutIconText">Leonardo M</div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};
