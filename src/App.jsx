import "./App.css";
import { landingPageData } from "./data.js";
import NotesContainer from './pages/NotesContainer.jsx'

const App = () => {
  return (
    <main>
      <header>
        <div className="logo-container">
          <h1 className="onShowAnimate">
            Note<i className="logo-text fa-brands fa-js"></i>
          </h1>
        </div>
        <nav>
          <a href="#home" className="navlink">
            Home
          </a>
          <a href="#notes" className="navlink">
            Notes
          </a>
        </nav>

        <a href="https://github.com/hulomjosuan21" className="navlink" target="_blank">
          <i className="fa-brands fa-github"></i>
          </a>
      </header>
      <section className="landingpage__container magicpattern" id="home">
        <div className="onShowAnimate landingpage__text">
          <h1>
            {landingPageData.greeting_text}{" "}
            <span>
              Note<i className="logo-text fa-brands fa-js"></i>
            </span>
          </h1>
          <p>{landingPageData.greeting_paragraph}</p>
        </div>
      </section>

      <NotesContainer />

      <footer>© 2024 NoteJS by Josuan. All Rights Reserved.</footer>
    </main>
  );
};

export default App;
