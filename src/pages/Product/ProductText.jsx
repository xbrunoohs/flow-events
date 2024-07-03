export default function ProductText({title, content}) {
    return (
        <div className="productTopicText">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    )
}