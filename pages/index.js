import Header from '../view/header'
import TaskList from '../view/task'
import listLogic from '../infrastructure/task_controller'
import { AddTask } from '../view/addtask'
import { Initializer } from '../infrastructure/initializer'
import { StoreMe } from 'store-me'

export default function Index() {
    const {
        list,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
    } = listLogic()

    return (
        <>
            <StoreMe>
                <Initializer />
                <Header />
                <AddTask
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
