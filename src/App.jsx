import './App.css'
import {landingPageData} from './data.js'
import {AddNotes, NotesContainer} from './pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const App = () => {

  return (
    <Router>
      <main>
        <header>
          <div className='logo-container'>
            <h1 className='onShowAnimate'>Note<i className="logo-text fa-brands fa-js"></i></h1>
          </div>
          <nav>
            <a href="#home" className='navlink navlink'>Home</a>
            <NavLink to="/" className="navlink onShowAnimate">Notes</NavLink>
            <NavLink to="/addnotes" className="navlink onShowAnimate">Add Notes</NavLink>
          </nav>
        </header>
        <section className='landingpage__container magicpattern' id='home'>
          <div className="onShowAnimate landingpage__text">
            <h1>{landingPageData.greeting_text} <span>Note<i className="logo-text fa-brands fa-js"></i></span></h1>
            <p>{landingPageData.greeting_paragraph}</p>
          </div>
        </section>

        <Routes>
          <Route path='/' element={<NotesContainer/>}/>
          <Route path='addnotes' element={<AddNotes/>}/>
        </Routes>

        <footer>© 2024 NoteJS by Josuan. All Rights Reserved.</footer>
      </main>
    </Router>
  )
}

export default App
