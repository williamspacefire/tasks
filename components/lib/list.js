import { useState } from "react";

export default function listLogic() {
    const LocalStorage = require("localstorage");
    var db;

    if (process.browser) {
        db = new LocalStorage("tasks");
    }

    const [list, setList] = useState(db ? db.get("myTask")[1] : []);

    let newTask = "";

    function updateListStorage() {
        if (process.browser) {
            const db = new LocalStorage("tasks");
            db.put("myTask", list);
        }
    }

    function addNewTask(e) {
        e.preventDefault();

        setList([{ completed: false, task: newTask }, ...list]);
        console.log(JSON.stringify(list, null, 2));
        updateListStorage();
    }

    function updateNewtask(e) {
        newTask = e.target.value;
    }

    function handleCheck(e) {
        const id = e.target.id;
        const cheked = e.target.checked;
        list[id].completed = cheked;

        setList([...list]);
        updateListStorage();
    }

    function deleteTask(e, id) {
        let listCopy = list;
        listCopy.splice(id, 1);

        setList([...listCopy]);
        updateListStorage();
    }

    return {
        list,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
    };
}
