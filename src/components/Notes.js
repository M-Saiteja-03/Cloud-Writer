import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useNoteState } from '../context/notes/noteState';
import Noteitem from './Noteitem';
import Addnote from './Addnote';

const Notes = (props) => {
    const note = useNoteState();
    const navigate=useNavigate();

    const { notes, getAllNotes } = note;
    useEffect(()=>{
        if(localStorage.getItem('token')){
            getAllNotes();
        }
        else{
            navigate('/login');
        }
        
    },[]);

    return (
        <>
            <Addnote showAlert={props.showAlert}/>
            <div>
                <h1>My Notes:</h1>
                {Array.isArray(notes) && notes.length>0 ? notes.map((ele) => (
                    <Noteitem key={ele._id} note={ele} showAlert={props.showAlert}/>
                )) : <p>No notes available</p>}
            </div>
        </>
    );
};

export default Notes;
