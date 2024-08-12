import {notes} from '../data.js'
import CodeBoxOne from '../components/CodeBoxOne.jsx'

const NotesContainer = () => {
  return (
    <section className='notes__container' id='notes'>
      <h1 className='onShowAnimate'>Total Notes <span>({notes.length})</span></h1>

      <div className="notes_wrapper">
        {notes && notes.map(({title, code, description}, index) => (
          <CodeBoxOne key={index+1} title={title} code={code} description={description} />
        ))}
      </div>
    </section>
  )
}

export default NotesContainer
