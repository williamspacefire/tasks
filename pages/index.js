import Header from '../components/ui/header'
import TaskList from '../components/ui/list'
import listLogic from '../components/lib/list'
import { AddTask } from '../components/ui/addtask'

export default function Index() {
    const {
        list,
        newTaskModalOpen,
        addButtonDisabled,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
        handleOpenNewTaskModal,
        handleCloseNewTaskModal,
    } = listLogic()

    return (
        <>
            <Header />
            <AddTask
                handleCloseNewTaskModal={handleCloseNewTaskModal}
                handleOpenNewTaskModal={handleOpenNewTaskModal}
                newTaskModalOpen={newTaskModalOpen}
                addButtonDisabled={addButtonDisabled}
                addNewTask={addNewTask}
                updateNewtask={updateNewtask}
            />
            <TaskList
                handleCheck={handleCheck}
                deleteTask={deleteTask}
                list={list}
            />
        </>
    )
}
