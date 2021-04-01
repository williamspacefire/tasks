import { useState } from 'react'

export default function listLogic() {
    const LocalStorage = require('localstorage')
    var db

    if (process.browser) {
        db = new LocalStorage('tasks')
        if (typeof db.get('myTask')[1] == 'undefined') db.put('myTask', [])
    }

    const [list, setList] = useState(db ? db.get('myTask')[1] : [])

    const [newTaskModalOpen, setNewTaskModalOpen] = useState(false)

    const [addButtonDisabled, setAddButtonDisabled] = useState(true)

    let newTask = ''

    function updateListStorage(data = null) {
        if (process.browser) {
            const db = new LocalStorage('tasks')
            db.put('myTask', data ? data : list)
        }
    }

    function addNewTask(e) {
        e.preventDefault()

        if (newTask == '') return

        const newList = [{ completed: false, task: newTask }, ...list]

        setList(newList)
        console.log(JSON.stringify(newList, null, 2))
        updateListStorage(newList)
        handleCloseNewTaskModal()
        newTask = ''
        setAddButtonDisabled(true)
    }

    function updateNewtask(e) {
        newTask = e.target.value
        setAddButtonDisabled(newTask == '')
    }

    function handleCheck(e) {
        const id = e.target.id
        const cheked = e.target.checked
        list[id].completed = cheked

        setList([...list])
        updateListStorage()
    }

    function deleteTask(e, id) {
        let listCopy = list
        listCopy.splice(id, 1)

        setList([...listCopy])
        updateListStorage()
    }

    function handleOpenNewTaskModal() {
        setNewTaskModalOpen(true)
    }

    function handleCloseNewTaskModal() {
        setNewTaskModalOpen(false)
    }

    return {
        list,
        newTaskModalOpen,
        addButtonDisabled,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
        handleOpenNewTaskModal,
        handleCloseNewTaskModal,
    }
}
