import React from "react";
//Icons
import CheckIcon from "@mui/icons-material/TaskAlt";
import EditIcon from "@mui/icons-material/SaveAs";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Todo({
    todo,
    toggleComplete,
    handleDelete,
    handleEdit,
}) {
    const [newTitle, setNewTitle] = React.useState(todo.title);
    const handleChange = (e) => {
        e.preventDefault();    //prevent the page reload
        if(todo.complete === true){
            setNewTitle(todo.title);
        } else{
            todo.title = "";
            setNewTitle(e.target.value);
        }
    }

    return(
        <div className="todo">
                        {/* When verified that the field is empty, it displays a new title */}
            <input style={{ textDecoration: todo.completed && "line-through" }} type="text" value={todo.title === "" ? newTitle : todo.title} className="list" onChange={handleChange}/>
            <div>
                <button className="button-complete" onClick={() => toggleComplete(todo)}>
                    <CheckIcon id="i"/>
                </button>
                <button className="button-edit" onClick={() => handleEdit(todo, newTitle)}>
                    <EditIcon id="i"/>
                </button>
                <button className="button-delete" onClick={() => handleDelete(todo.id)}>
                    <DeleteIcon id="i"/>
                </button>
            </div>
        </div>
    );

};
