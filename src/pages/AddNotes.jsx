import { useState } from 'react'
import './pages_style.css'


const AddNotes = () => {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteSnippet, setNoteSnippet] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(`${noteTitle}\n${noteSnippet}\n${noteDescription}`)

    setNoteTitle('')
    setNoteSnippet('')
    setNoteDescription('')
  }

  return (
    <section className='notes__container add_notes_container'>
      <h1 className='onShowAnimate'>Add Notes</h1>
      <div className='add_notes_wrapper'>

        <form onSubmit={handleSubmit} className='animateOnScroll'>

          <input type="text" placeholder="title" value={noteTitle} onChange={e => setNoteTitle(e.target.value)} />
          <textarea name="" id="" placeholder="Code here" value={noteSnippet} onChange={e => setNoteSnippet(e.target.value)} ></textarea>
          <textarea name="" id="" placeholder="Description here" value={noteDescription} onChange={e => setNoteDescription(e.target.value)} ></textarea>

          <button type="submit">Add</button>
        </form>

      </div>
    </section>
  )
}

export default AddNotes
