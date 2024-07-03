import React from "react";
import LayoutMain from "../../components/Layout/LayoutMain";
import Carousel from "./CarouselCustom";
import "./style.css";

const eventos = [
  {
    id: 3,
    image:
      "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/OmoZoDAqVKED7G7OwalbUnZngy65CP89TI6vCnET.jpeg",
    link: "https://www.blueticket.com.br/evento/33823/lovely-daisy",
    title: "Lovely Daisy",
    description: `Transporte-se para uma era de paz, amor e estilo com a festa Lovely Daisy! Inspirada na icônica margarida dos anos 70, esta celebração promete trazer toda a essência da contracultura e da estética da época. `,
    eventDate: "Sáb, 09 de Dezembro de 2023",
    opening: "16:00",
    place: "Amaité Praia",
    city: "Balneário Camboriú",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [{ name: "José", review: "" }],
    promoter: "Amaité Praia",
    show: ["Beto Chuquer", "Edu Schwartz & Caco", "Enrico & Carmo", "Alvinho"],
    genre: ["eletrônica"],
    type: ["festa"],
  },
  {
    id: 2,
    image:
      "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/rbtqBqpeCfTQSGja57VlZ1b8CTOna4QTKkjqqenq.jpeg",
    link: "https://www.blueticket.com.br/evento/33307/paradise-sunset%C2%A0by%C2%A0corona",
    title: "Paradise Sunset by Corona",
    description: `Nada melhor como o Paradise Sunset by Corona para iniciar o novo ano!

O segundo dia de festa do Jurerê Weekend será no dia 02 de janeiro, com o Paradise Sunset, assinado pela Corona.

Na beira da praia, com música boa, cerveja e a vibe singular de Jurerê In, o day party promete entregar uma experiência única para iniciar 2024.`,
    eventDate: "Ter, 02 de Janeiro de 2024",
    opening: "14:00",
    place: "APCEF - Associação do Pessoal da Caixa Econômica Federal",
    city: "Florianópolis",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [{ name: "José", review: "" }],
    promoter: "Jurere Eventos",
    show: ["MANEVA", "COY", "CRIS HOEFLING", "DJs"],
    genre: ["eletrônica", "funk", "reage"],
    type: ["festa"],
  },
  {
    id: 1,
    image:
      "https://d2hnilqqbw3vnf.cloudfront.net/images/imagens/full/dlckfblRj8dAqXQJ1Erj8iCshh4DdxOxzxvd3oJH.jpeg",
    link: "https://www.blueticket.com.br/evento/33746/e-o-tchan-30-anos",
    title: "É o Tchan 30 anos",
    description:
      "É o Tchan! é um grupo musical brasileiro de Pagode formado em 1994 pelos cantores Beto Jamaica e Compadre Washington. Originalmente, além dos vocalistas, tinha como dançarinos Carla Perez, Débora Brasil e Jacarés. Depois de alguns anos os três estão de volta ao grupo para a comemoração dos 30 anos de carreira da banca.",
    eventDate: "Sex, 12 de Janeiro de 2024",
    opening: "21:00",
    place: "Stage Music Park",
    city: "Florianópolis",
    state: "SC",
    location: { latitude: 1231231, longitude: 12312321 },
    review: [{ name: "José", review: "Sempre é bom o show deles" }],
    promoter: "Desp Entretenimento",
    show: ["é o tchan"],
    genre: ["samba"],
    type: ["show"],
  },
];

export default function Feed() {
  return (
    <LayoutMain headerUser>
      <section className="feed-container">
        <h1>Eventos recomendados:</h1>
        <div className="feed-carousel-container">
          <Carousel events={eventos} />
        </div>
      </section>
    </LayoutMain>
  );
}
