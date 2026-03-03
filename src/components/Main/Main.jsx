import "./Main.css";
import mainLogo from "../../assets/author-bio_img 2.jpeg";
import Newscard from "../NewsCard/NewsCard";

function Main({
  articles,
  isSearching,
  hasSearched,
  searchError,
  visibleCount,
  onShowMore,
}) {
  const renderResults = () => {
    if (!hasSearched) return null;

    if (isSearching) {
      return <p className="main__results-message">Loading...</p>;
    }
    if (searchError) {
      return <p className="main__results-message">{searchError}</p>;
    }
    if (articles.length === 0) {
      return <p className="main__results-message">Nothing Found</p>;
    }
    return (
      <>
        <div className="main__results-cards">
          {articles.slice(0, visibleCount).map((article) => (
            <Newscard key={article.url} article={article} />
          ))}
        </div>
        {visibleCount < articles.length && (
          <button type="button" onClick={onShowMore}>
            show more
          </button>
        )}
      </>
    );
  };

  return (
    <div className="main__content-container">
      {hasSearched && (
        <section className="main__results">
          <h2 className="main__results-title">Search Results</h2>
          {renderResults()}
        </section>
      )}
      <div className="main__content">
        <img className="main__bio-img" src={mainLogo} alt="bio pic" />
        <div className="main__author-content">
          <h1 className="main__content-title">About the author</h1>
          <p className="main__content-bio">
            I’m Simon, a full-stack developer focused on building clean,
            responsive, and user-friendly web applications. I work primarily
            with React, JavaScript, HTML, CSS, Node.js, and Express, and I enjoy
            turning ideas into real, functional products. Through my experience
            at TripleTen, I’ve strengthened my problem-solving skills, learned
            how to build scalable projects, and gained hands-on experience
            working across the full development stack. I help clients bring
            clarity to their ideas and turn them into reliable, well-designed
            digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
