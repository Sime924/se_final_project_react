import "./NewsCard.css";

function Newscard({ article }) {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="news__card">
      <div className="news__card-image_container">
        <img
          className="news__card-image"
          src={urlToImage || "/fallback.jpg"}
          alt={title || "Article Image"}
        />
        <button
          type="button"
          className="news__card-save_btn"
          aria-label="Save article"
        />
      </div>
      <div className="news__card-content">
        <p className="news__card-date">{formattedDate}</p>
        <h3 className="news__card-title">{title}</h3>
        <p className="news__card-description">{description}</p>
        <p className="news__card-source">{source?.name} </p>
      </div>
      <a
        className="news__card-link"
        href={url}
        target="_blank"
        rel="noreferrer"
      />
    </div>
  );
}

export default Newscard;
