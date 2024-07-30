import noteContext from "./noteContext";
import { useState, useContext } from "react";

export const useNoteState = () => {
    const note = useContext(noteContext);
    return note;
}

export const NotesProvider = (props) => {
    const initialstate = [
        {
            "_id": "66a5546ba8d2ff0009e740a6",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My first note",
            "description": "testing",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a6",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a6",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a6",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        },
        {
            "_id": "66a5546ba8d2ff0009e740a6",
            "user": "66a4fa2978760feb5c0dd345",
            "title": "My 2nd note",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a expedita nam perferendis. Nulla animi fugit iusto, aperiam praesentium exercitationem delectus totam id atque nostrum earum magni labore eligendi tempora.",
            "tag": "testing",
            "date": "2024-07-27T20:11:23.396Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(initialstate);
    return (
        <noteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}

