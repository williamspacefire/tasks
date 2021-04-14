import { getStoreMe, setStoreMe } from 'store-me'

const LocalStorage = require('localstorage')
let newTask = ''

export const TASK_COMPLETED = 'completed'
export const TASK_TO_DO = 'todo'

export function changeModalVisibility() {
    const { isModalOpen } = getStoreMe('isModalOpen')
    setStoreMe({ isModalOpen: !isModalOpen })
}

function updateTaskLocalStorage(data) {
    if (!process.browser) return

    const ls = new LocalStorage('tasks')
    ls.put('myTask', data)
}

export const addNewTask = e => {
    e.preventDefault()

    if (newTask == '') return

    const { tasks } = getStoreMe('tasks')

    const newList = [
        { completed: false, task: newTask, id: tasks.length + 1 },
        ...tasks,
    ]

    newTask = ''
    setStoreMe({ tasks: newList, isAddTaskButtonDisabled: true })
    updateTaskLocalStorage(newList)
    changeModalVisibility()
}

const isNewTaskEmpty = () => newTask.length === 0

export const updateNewtask = e => {
    newTask = e.target.value
    setStoreMe({ isAddTaskButtonDisabled: isNewTaskEmpty() })
}

export const handleCheck = e => {
    const { tasks } = getStoreMe('tasks')
    const id = e.target.id
    const cheked = e.target.checked

    tasks[id].completed = cheked

    setStoreMe({ tasks: tasks })
    updateTaskLocalStorage(tasks)
}

export const deleteTask = (e, id) => {
    const { tasks } = getStoreMe('tasks')

    let listCopy = tasks
    listCopy.splice(id, 1)

    setStoreMe({ tasks: listCopy })
    updateTaskLocalStorage(tasks)
}

export const getListTypeCondition = (task, type) => {
    if (type == TASK_COMPLETED) {
        return task.completed
    } else {
        return !task.completed
    }
}
