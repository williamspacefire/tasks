import Header from '../view/header'
import TaskList from '../view/task'
import listLogic from '../infrastructure/task_controller'
import { AddTask } from '../view/addtask'
import { StoreMe } from 'store-me'

export default function Index() {
    const {
        list,
        isAddTaskButtonDisabled,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
    } = listLogic()

    const initialState = {
        isModalOpen: false,
        isAddTaskButtonDisabled: true,
        task: {
            completed: [],
            todo: [],
        },
    }

    return (
        <>
            <StoreMe initialState={initialState}>
                <Header />
                <AddTask
                    isAddTaskButtonDisabled={isAddTaskButtonDisabled}
                    addNewTask={addNewTask}
                    updateNewtask={updateNewtask}
                />
                <TaskList
                    handleCheck={handleCheck}
                    deleteTask={deleteTask}
                    list={list}
                />
            </StoreMe>
        </>
    )
}
