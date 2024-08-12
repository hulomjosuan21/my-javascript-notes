import CodeBoxOne from '../components/CodeBoxOne.jsx'
import {getDatabase, ref, get } from "firebase/database";
import app from '../firebaseConfig.js';
import { useEffect, useState } from 'react';

const NotesContainer = () => {
  
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const db = getDatabase(app);
        const dbRef = ref(db, 'note/josuan');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          setNotes(Object.values(snapshot.val()));
        } 
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchNotes();
  }, []);


  return (
    <section className='notes__container' id='notes'>
      <h1 className='onShowAnimate'>Total Notes <span>({notes.length})</span></h1>

      <div className="notes_wrapper">
        {notes && notes.map((note, index) => (
          <CodeBoxOne key={index} note={note} />
        ))}
      </div>
    </section>
  )
}

export default NotesContainer
