import React, { useEffect, useLayoutEffect } from 'react';
import { useNoteState } from '../context/notes/noteState';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = () => {
    const note = useNoteState();

    const { notes, getAllNotes } = note;
    useEffect(()=>{
        getAllNotes();
    },[]);

    return (
        <>
            <Addnote />
            <div>
                <h1>My Notes</h1>
                {Array.isArray(notes) ? notes.map((ele) => (
                    <Noteitem key={ele._id} note={ele} />
                )) : <p>No notes available</p>}
            </div>
        </>
    );
};

export default Notes;
