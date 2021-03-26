import { useState } from "react";

export default function listLogic() {
    const [list, setList] = useState([])
    let newTask = ""

    function addNewTask(e) {
        e.preventDefault()

        setList([{completed: false, task: newTask}, ...list])
        console.log(JSON.stringify(list, null, 2))
    }

    function updateNewtask(e) {
        newTask = e.target.value
    }

    function handleCheck(e) {
        const id = e.target.id
        const cheked = e.target.checked
        list[id].completed = cheked
        
        setList([...list])
    }

   function deleteTask(e, id) {
        let listCopy = list
        listCopy.splice(id, 1)  

        setList([...listCopy])
    }

    return {
        list,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask
    }
}