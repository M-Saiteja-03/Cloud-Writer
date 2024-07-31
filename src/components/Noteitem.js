import React from 'react'

const Noteitem = (props) => {
    const {note} = props;
    return (
        <div >
            <div className="card text-center card border-primary mb-3">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><i class="fa-solid fa-pen-to-square"></i> Edit Note</a>
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
                    <p className="card-text">{note.description}</p>
                    <a href="#" className="btn btn-primary"><i class="fa-solid fa-trash"></i> Delete Note</a>
                </div>
            </div>
        </div>
    )
}

export default Noteitem
