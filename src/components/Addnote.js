import React from 'react'
import { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Addnote = (props) => {
    const note =useContext(noteContext);
    const {addNote} = note;
    const [notedetails,setNotedetails] = useState({title:"", description:"",tag:""})

    const onChange =(e)=>{
        setNotedetails({...notedetails,[e.target.name]: e.target.value})
    }
    const Addnotehandle =(e)=>{
        e.preventDefault();
        addNote(notedetails.title,notedetails.description,notedetails.tag);
        setNotedetails({title:"", description:"",tag:""})
        props.showAlert("Added note sccessfully","success")

    }
    return (
        <div>
            <h1>Add a Note</h1>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' value={notedetails.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' value={notedetails.description} onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' value={notedetails.tag} onChange={onChange} minLength={5} required/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={Addnotehandle}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote
