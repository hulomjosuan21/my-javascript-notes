/* eslint-disable react/no-unescaped-entities */
import './App.css'
import landingPageData from './data'

const App = () => {
  return (
    <main>
      <header>
        <div className='logo-container'>
          <h1 className='onShowAnimate'>Note<i className="logo-text fa-brands fa-js"></i></h1>
        </div>

        <nav>
          <a href="/" className='onShowAnimate'>Home</a>
          <a href="#notes" className='onShowAnimate'>Notes</a>
        </nav>
      </header>

      <section className='landingpage__container'>
        <div className="onShowAnimate landingpage__text">
          <h1>{landingPageData.greeting_text} <span>Note<i className="logo-text fa-brands fa-js"></i></span></h1>
          <p>{landingPageData.greeting_paragraph}</p>
        </div>
      </section>

      <section className='notes__container' id='notes'>
        <h1 className='onShowAnimate'>Code Notes</h1>
      </section>
    </main>
  )
}

export default App
