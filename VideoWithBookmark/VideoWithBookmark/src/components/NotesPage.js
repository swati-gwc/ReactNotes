import React,{ useEffect, useState }  from 'react';
import uuid from "react-uuid";
import EditNotes from './notesComponents/EditNotes';
import ListOfNotes from './notesComponents/ListOfNotes';
import './NotesPage.css';

 
const NotesPage = () => {
    const [notes, setNotes] = useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
      );
      const [activeNote, setActiveNote] = useState(false);
    
      useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
      }, [notes]);
    
      const onAddNote = () => {
        const newNote = {
          id: uuid(),
         
          body: "",
          lastModified: Date.now(),
        };
    
        setNotes([newNote, ...notes]);
        setActiveNote(newNote.id);
      };
    
      const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({ id }) => id !== noteId));
      };
    
      const onUpdateNote = (updatedNote) => {
        const updatedNotesArr = notes.map((note) => {
          if (note.id === updatedNote.id) {
            return updatedNote;
          }
    
          return note;
        });
    
        setNotes(updatedNotesArr);
      };
    
      const getActiveNote = () => {
        return notes.find(({ id }) => id === activeNote);
      };
    return (
       <div  style={{backgroundColor:"#FFF"}}>
           <div className="editNotes">Here</div>
           <div className="listOfNotes">Here</div>
           <ListOfNotes
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <EditNotes activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
           
         
       </div>
    );
}
 
export default NotesPage;