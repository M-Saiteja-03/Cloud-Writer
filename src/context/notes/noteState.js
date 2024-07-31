import noteContext from "./noteContext";
import { useState, useContext } from "react";

export const useNoteState = () => {
    const note = useContext(noteContext);
    return note;
}

export const NotesProvider = (props) => {
    const initialstate = [
        {
            "_id": "66a5546ba8d2ff0009e740a61",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My first note",
            "description": "testing",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a62",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a63",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a64",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a65",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialstate);

    //Add Note
    const addNote=(title,description,tag)=>{
        const note={
            "_id": "616a5546ba8d2ff0009e740a65",
            "user": "66a4fa2978760feb5c0dd345",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        };
        setNotes(prevNotes => prevNotes.concat(note)); //best way to use setNotes as a function call
    }
    
    return (
        <noteContext.Provider value={{ notes, setNotes, addNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

