import { useState } from "react"


export const ToDoList = () => {

    const [note, setNote] = useState('nueva tarea !!');
    const [newNote, setNewNote] = useState([{ id: 1, todo: 'tarea 1' }, { id: 2, todo: 'tarea 2' }]);

    const handleNote = (event) => { setNote(event.target.value) }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (note != '') {
            const DatatoSend = { id: newNote.length + 1, todo: note }
            setNewNote([...newNote, DatatoSend]);
            setNote('');
        }

    }

    const handleDeleteNote = (deleteNote) => {
        setNewNote(newNote.filter(item => item.id != deleteNote.id))
    }

    return (
        <div className="col-12 d-flex justify-content-center">
            <div className="col-4 card text-center">
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3 card-header text-start">
                        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Nota para recordar da enter para guardar"
                            value={note} onChange={handleNote} />
                    </div>
                </form>
                <div className="card-body">
                    <div className="card">
                        <ul className="list-group list-group-flush text-start">
                            {newNote.map((item) => {
                                return (
                                    <li key={item.id} className="hidden-icon list-group-item d-flex justify-content-between">
                                        {item.todo}
                                        <span>
                                            <button onClick={() =>handleDeleteNote(item)} type="button" className="btn btn-danger">Borrar</button>
                                        </span>


                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="card-footer text-body-secondary text-start">
                    {newNote.length == 0 ? 'No tienes' : newNote.length} Actividades pendientes
                </div>
            </div>
        </div>
    )
}