import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./style.css";
import flowLogo from "../../assets/flow-logo-big.svg";
import { OptionCard } from "./OptionCard";
import homeCardOption1 from "../../assets/home/home-card-option-1.png";
import homeCardOption2 from "../../assets/home/home-card-option-2.png";
import homeCardOption3 from "../../assets/home/home-card-option-3.png";
import homeCardOption4 from "../../assets/home/home-card-option-4.png";
import homeCardSvg1 from "../../assets/svg/ticket-voucher.svg";
import homeCardSvg2 from "../../assets/svg/calendar-check.svg";
import homeCardSvg3 from "../../assets/svg/show.svg";
import homeCardSvg4 from "../../assets/svg/user-add.svg";
import homeCardReview1 from "../../assets/home/home-card-review-1.png";
import homeCardReview2 from "../../assets/home/home-card-review-2.png";
import homeCardReview3 from "../../assets/home/home-card-review-3.png";
import homeCardReview4 from "../../assets/home/home-card-review-4.png";
import ReviewCard from "./ReviewCard";
import homeBg from "../../assets/home/background.png";

const appOptions = [
  {
    title: "PROCURAR UM EVENTO PERTO DE VOCÊ",
    description:
      "Deixamos você antenado a todos os eventos que estão rolando perto de você, seu único dever é sair pra curtir a noite toda!",
    image: homeCardOption1,
    svg: homeCardSvg1,
  },
  {
    title: "DEIXAMOS VOCÊ ANTENADO DO EVENTO",
    description:
      "Disponibilizamos as principais informações do evento para você, facilitando a sua escolha!",
    image: homeCardOption2,
    svg: homeCardSvg2,
  },
  {
    title: "VEJA AS AVALIAÇÕES DE USUÁRIOS",
    description:
      "Fique por dentro dos principais feedbacks e avaliações de usuários que frequentaram o evento da sua escolha!",
    image: homeCardOption3,
    svg: homeCardSvg3,
  },
];

const appReview = [
  {
    image: homeCardReview1,
    name: "OLIVIA BANKS",
    review:
      "“Tava numa sexta com uma vontade absurda de sair, mas SEM IDÉIA ALGUMA PRA ONDE IR, foi ai que conheci o flow, logo depois de fazer meu cadastro, ja de cara me indicaram eventos que tinha tudo haver cmg, simplesmente AMEIII ”",
  },
  {
    image: homeCardReview2,
    name: "DAVID MARSHALL",
    review:
      "“Simplestemente apaixonado pelo flow, todos os dias me indica eventos que super combinam comigo, ja me ajudou a achar eventos e conhecer pessoas que não tinha nem idéia que um dia iria conhecer, obrigado pela idéa maravilhora!!”",
  },
  {
    image: homeCardReview3,
    name: "DONA CLEUSA",
    review:
      "“Graças ao flow, consegui potencializar meus negócios, trabalho com uma barraquinha de cachorro quente, e meu maior problema éra saber onde achar uma grande quantidade de pessoas com fome... Graças ao flow, fico antenada dos principais eventos!!”",
  },
  {
    image: homeCardReview4,
    name: "MICHAEL OLIVER",
    review:
      "“Sou do tipo que gosta de um rock pesado, roda punk, música alta, cerveja gelada e mulher bonita. Meu maior problema éra aonde procurar esse tipo de evento, assim que conheci um flow, não perco 1 único evento na minha cidade e na região, vlw equipe do flow!!”",
  },
];

export const Home = () => {
  return (
    <>
      <div className="homeBg">
        <img src={homeBg} alt="" />
      </div>
      <Header />
      <Main>
        <section>
          <img className="homeFlowImgLogo" src={flowLogo} alt="Entre no flow" />
          <p className="homeSubLogo">AGILIZANDO SEU ROLÊ!</p>
        </section>

        <section className="homeOptionsCard">
          <h1>NOSSAS OPÇÕES</h1>
          <div className="homeOptionsCardInner">
            {appOptions.map((i, k) => (
              <OptionCard key={k} {...i} />
            ))}
          </div>
        </section>

        <section className="homeReviewContainer">
          {appReview.map((i, k) => (
            <ReviewCard key={k} {...i} />
          ))}
        </section>
      </Main>
      <Footer />
    </>
  );
};
