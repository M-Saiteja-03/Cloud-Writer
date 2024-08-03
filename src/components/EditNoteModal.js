import React from 'react';

const EditNoteModal = ({ note, editedNoteDetails, setEditedNoteDetails, handleEdit }) => {
    const onChange = (e) => {
        setEditedNoteDetails({ ...editedNoteDetails, [e.target.name]: e.target.value });
    }

    return (
        <div className="modal fade" id={`editModal${note._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle" value={editedNoteDetails.etitle} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edescription" name="edescription" value={editedNoteDetails.edescription} onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" value={editedNoteDetails.etag} onChange={onChange} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEdit}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditNoteModal;
