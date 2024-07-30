import React from 'react'
import { useNoteState } from '../context/notes/noteState';
import Noteitem from './Noteitem';

const Notes = () => {
    const note = useNoteState();
    const { notes, setNotes } = note;
    return (
        <div>
            {notes.map((ele) => {
                return <Noteitem note={ele}/>;
            })}

        </div>
    )
}

export default Notes;
