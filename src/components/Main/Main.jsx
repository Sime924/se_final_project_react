import "./Main.css";
import mainLogo from "../../assets/author-bio_img 2.jpeg";

function Main() {
  return (
    <div className="main__content-container">
      <div className="main_content">
        <img className="main__bio-img" src={mainLogo} alt="bio pic" />
        <h1 className="main__content-title">About the author</h1>
        <p className="main__content-bio">
          I’m Sime, a full-stack developer focused on building clean,
          responsive, and user-friendly web applications. I work primarily with
          React, JavaScript, HTML, CSS, Node.js, and Express, and I enjoy
          turning ideas into real, functional products. Through my experience at
          TripleTen, I’ve strengthened my problem-solving skills, learned how to
          build scalable projects, and gained hands-on experience working across
          the full development stack. I help clients bring clarity to their
          ideas and turn them into reliable, well-designed digital solutions.
        </p>
      </div>
    </div>
  );
}

export default Main;
