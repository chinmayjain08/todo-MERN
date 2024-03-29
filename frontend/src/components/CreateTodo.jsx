import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="title" onChange={function(e){
            setTitle(e.target.value);
        }} placeholder="title" />

        <input style={{
            padding: 10,
            margin: 10
        }} type="text" id="description" onChange={function(e){
            setDescription(e.target.value);
        }} placeholder="description" />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick = {()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    completed: false
                }),
                headers:{
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Created")
            })
        }}>Add TODO</button>
    </div>
}