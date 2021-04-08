import { useState } from 'react'
import { getStoreMe, setStoreMe } from 'store-me'

const LocalStorage = require('localstorage')
var db

export const TASK_COMPLETED = 'completed'
export const TASK_TO_DO = 'todo'

export function changeModalVisibility() {
    const { isModalOpen } = getStoreMe('isModalOpen')
    setStoreMe({ isModalOpen: !isModalOpen })
}

function updateTaskLocalStorage({ data }) {
    if (!process.browser) return

    const db = new LocalStorage('tasks')
    db.put('myTask', data)
}

export default function listLogic() {
    //TODO: Work on a better code
    if (process.browser) {
        db = new LocalStorage('tasks')
        if (typeof db.get('myTask')[1] == 'undefined') db.put('myTask', [])
    }

    const [list, setList] = useState(db ? db.get('myTask')[1] : [])
    const [isAddTaskButtonDisabled, setisAddTaskButtonDisabled] = useState(true)

    let newTask = ''

    function addNewTask(e) {
        e.preventDefault()

        if (newTask == '') return

        const newList = [
            { completed: false, task: newTask, id: list.length + 1 },
            ...list,
        ]

        setList(newList)
        console.log(JSON.stringify(newList, null, 2))
        updateTaskLocalStorage({ data: newList })
        newTask = ''
        setisAddTaskButtonDisabled(true)
        changeModalVisibility()
    }

    function updateNewtask(e) {
        newTask = e.target.value
        setisAddTaskButtonDisabled(newTask == '')
    }

    function handleCheck(e) {
        const id = e.target.id
        const cheked = e.target.checked
        list[id].completed = cheked

        setList([...list])
        updateTaskLocalStorage({ data: list })
    }

    function deleteTask(e, id) {
        let listCopy = list
        listCopy.splice(id, 1)

        setList([...listCopy])
        updateTaskLocalStorage({ data: list })
    }

    return {
        list,
        isAddTaskButtonDisabled,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
    }
}
