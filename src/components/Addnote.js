import React from 'react'
import { useState,useContext } from 'react'
import noteContext from '../context/notes/noteContext'


const Addnote = () => {
    const note =useContext(noteContext);
    const {addNote} = note;
    const [notedetails,setNotedetails] = useState({title:"", description:"",tag:"default"})

    const onChange =(e)=>{
        setNotedetails({...notedetails,[e.target.name]: e.target.value})
    }
    const Addnotehandle =(e)=>{
        e.preventDefault();
        addNote(notedetails.title,notedetails.description,notedetails.tag);

    }
    return (
        <div>
            <h1>Add a Note</h1>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name='description' onChange={onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' onChange={onChange}/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={Addnotehandle}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default Addnote
