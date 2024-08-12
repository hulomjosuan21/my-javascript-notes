import { useState } from 'react'
import './pages_style.css'
import {getDatabase, ref, set, push} from "firebase/database";
import app from '../firebaseConfig';

const AddNotes = () => {

  const [noteTitle, setNoteTitle] = useState('');
  const [noteSnippet, setNoteSnippet] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault()

    if(noteTitle && noteSnippet && noteDescription){
      const db = getDatabase(app);
      const newDoc = push(ref(db, "note/josuan"));
  
      set(newDoc, {
        title: noteTitle,
        code: noteSnippet,
        description: noteDescription
      }).then(() => {
        alert("data added successfully");
      }).catch((err) => {
        alert(`Error: ${err}`)
      })

      setNoteTitle('')
      setNoteSnippet('')
      setNoteDescription('')
    }else {
      alert("data is empty")
    }
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
