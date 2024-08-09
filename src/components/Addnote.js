import React, { useState, useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const Addnote = (props) => {
    const note = useContext(noteContext);
    const { addNote } = note;
    const [notedetails, setNotedetails] = useState({ title: "", description: "", tag: "" });
    const [errors, setErrors] = useState({ title: "", description: "", tag: "" });

    const onChange = (e) => {
        setNotedetails({ ...notedetails, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error message on change
    }

    const Addnotehandle = (e) => {
        e.preventDefault();

        let valid = true;
        let newErrors = { title: "", description: "", tag: "" };

        if (!notedetails.title.trim()) {
            newErrors.title = "Title cannot be empty.";
            valid = false;
        }
        if (!notedetails.description.trim()) {
            newErrors.description = "Description cannot be empty.";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            addNote(notedetails.title, notedetails.description, notedetails.tag);
            setNotedetails({ title: "", description: "", tag: "" });
            props.showAlert("Added note successfully", "success");
        }
    }

    return (
        <div>
            <h1>Add a Note</h1>
            <div className="container my-3">
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                            id="title"
                            name="title"
                            value={notedetails.title}
                            aria-describedby="emailHelp"
                            onChange={onChange}
                            required
                        />
                        <div className="invalid-feedback">
                            {errors.title}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                            id="description"
                            name="description"
                            value={notedetails.description}
                            onChange={onChange}
                            required
                        />
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input
                            type="text"
                            className={`form-control ${errors.tag ? 'is-invalid' : ''}`}
                            id="tag"
                            name="tag"
                            value={notedetails.tag}
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={Addnotehandle}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Addnote;
