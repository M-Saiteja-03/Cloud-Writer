import noteContext from "./noteContext";
import { useState, useContext } from "react";

export const useNoteState = () => {
    const note = useContext(noteContext);
    return note;
}

export const NotesProvider = (props) => {

    const [notes, setNotes] = useState([]);
    const host = 'http://localhost:5000';

    //fetching all notes from db to display in frontend
    const getAllNotes = async () => {
        const response = await fetch(`${host}/api/notes/getallnotes`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNGZhMjk3ODc2MGZlYjVjMGRkMzQ1In0sImlhdCI6MTcyMjA5MTgwN30.bdCTZ_Sl40P24b1KihYl64YbOafGEegvExQ-9gjqJ2k'
                }
            }
        );
        const json=await response.json();
        console.log(json);
        setNotes(json);

    }


    //Add Note
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnotes`,
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNGZhMjk3ODc2MGZlYjVjMGRkMzQ1In0sImlhdCI6MTcyMjA5MTgwN30.bdCTZ_Sl40P24b1KihYl64YbOafGEegvExQ-9gjqJ2k'
                },
                body: JSON.stringify({title,description,tag})
            }
        );
        const note = await response.json();
        setNotes(prevNotes => [...prevNotes, note]); //best way to use setNotes as a function call
    }

    //Delete Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNGZhMjk3ODc2MGZlYjVjMGRkMzQ1In0sImlhdCI6MTcyMjA5MTgwN30.bdCTZ_Sl40P24b1KihYl64YbOafGEegvExQ-9gjqJ2k'
                },
            }
        );
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    // Edit Node
    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNGZhMjk3ODc2MGZlYjVjMGRkMzQ1In0sImlhdCI6MTcyMjA5MTgwN30.bdCTZ_Sl40P24b1KihYl64YbOafGEegvExQ-9gjqJ2k'
            },
            body: JSON.stringify({ title, description, tag })
        });
    
        const json = await response.json();
        const newNotes = notes.map(note => note._id === id ? json : note);
        setNotes(newNotes);
    }
    

    return (
        <noteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

