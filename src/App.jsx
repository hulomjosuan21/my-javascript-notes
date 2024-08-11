import './App.css'
import {landingPageData, notes} from './data.js'
import CodeBoxOne from './components/CodeBoxOne.jsx'

const App = () => {
  return (
    <main>
      <header>
        <div className='logo-container'>
          <h1 className='onShowAnimate'>Note<i className="logo-text fa-brands fa-js"></i></h1>
        </div>

        <nav>
          <a href="#home" className='onShowAnimate'>Home</a>
          <a href="#notes" className='onShowAnimate'>Notes</a>
        </nav>
      </header>

      <section className='landingpage__container' id='home'>
        <div className="onShowAnimate landingpage__text">
          <h1>{landingPageData.greeting_text} <span>Note<i className="logo-text fa-brands fa-js"></i></span></h1>
          <p>{landingPageData.greeting_paragraph}</p>
        </div>
      </section>

      <section className='notes__container' id='notes'>
        <h1 className='onShowAnimate'>Total Notes ({notes.length})</h1>

        <div className="notes_wrapper">
          {notes.map(({title, code, description}, index) => (
            <CodeBoxOne key={index+1} title={title} code={code} description={description} />
          ))}
        </div>
      </section>


      <footer>© 2024 NoteJS by Josuan. All Rights Reserved.</footer>
    </main>
  )
}

export default App
