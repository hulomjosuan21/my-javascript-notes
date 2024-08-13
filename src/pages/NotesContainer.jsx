import { useEffect, useState } from 'react';
import CodeBoxOne from '../components/CodeBoxOne.jsx'
import { db } from '../firebaseConfig.js';
import { collection, getDocs } from "firebase/firestore";
const NotesContainer = () => {
  
  const [notes, setNotes] = useState([])

  const getNotes = async () => {
    const querySnapshot = await getDocs(collection(db, "notes"));
    const _notes = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setNotes(_notes)
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <section className='notes__container' id='notes'>
      <h1 className='onShowAnimate'>Total Notes <span>({notes.length})</span></h1>

      <div className="notes_wrapper">
        {
          notes.map(({id, title, code, description}) => (
            <CodeBoxOne key={id} title={title} code={code} description={description}/>
          ))
        }
      </div>
    </section>
  )
}

export default NotesContainer
