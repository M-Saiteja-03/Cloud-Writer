import React, { useState } from 'react'
import {useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import EditNoteModal from './EditNoteModal';

const Noteitem = (props) => {
    const {note} = props;
    const context=useContext(noteContext);
    const {deleteNote,editNote} = context;

    const [editedNoteDetails, setEditedNoteDetails] = useState({ etitle: note.title, edescription: note.description, etag: note.tag });

    const [isExpanded, setIsExpanded] = useState(false);


    const handleDelete=()=>{
        deleteNote(note._id);
        props.showAlert("Deleted Successfully","success")
    }

    const handleEdit = () => {
        editNote(note._id, editedNoteDetails.etitle, editedNoteDetails.edescription, editedNoteDetails.etag);
        props.showAlert("Edited Note Successfully","success")
    }

    const toggleExpand = () => {
        setIsExpanded(!isExpanded); // Toggle the expanded state
    }

    const MAX_LENGTH = 100;

    return (
        <div >
            <div className="card text-center card border-primary mb-3">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#editModal${note._id}`}><i className="fa-solid fa-pen-to-square"></i> Edit Note</button>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className={`card-text note-description ${isExpanded ? 'note-expanded' : ''}`}>
                        {isExpanded ? note.description : note.description.length > MAX_LENGTH ? `${note.description.substring(0, MAX_LENGTH)}...` : note.description}
                        {note.description.length > MAX_LENGTH && (
                        <button className="btn btn-link" onClick={toggleExpand}>
                            {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                    )}
                    </p>
                    
                    <button className="btn btn-danger" onClick={handleDelete}><i className
                    ="fa-solid fa-trash"></i> Delete Note</button>
                </div>
            </div>
            <EditNoteModal 
                note={note} 
                editedNoteDetails={editedNoteDetails} 
                setEditedNoteDetails={setEditedNoteDetails} 
                handleEdit={handleEdit} 
            />
        </div>
    )
}

export default Noteitem;
