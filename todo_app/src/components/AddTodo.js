import React from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
//import { async } from "@firebase/util";


export default function AddTodo(){
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title !== "") {
            // store the data at Firebase
            await addDoc(collection(db, "todos"), {
                title, 
                completed: false,
            });
            // After storing the data clear the input
            setTitle("");
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="input_container">
                {/* Input field for the todo list */}
                <input type="text" placeholder="Enter tasks..." value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div className="btn_container">
                <button>Add</button>
            </div>
        </form>
    );
}    
