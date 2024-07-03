import "./OptionCard.css"

export function OptionCard({ title, description, image, svg }) {
  return (
    <div className="optionCardContainer">
      <div className="optionCardImgContainer">
        <img src={image} alt={title} />
        <div className="optionCardImgContainerBlurEffect"/>
        <div className="optionCardSvg">
          <img src={svg} alt="" />
        </div>
      </div>
      <div className="optionCardContent">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
