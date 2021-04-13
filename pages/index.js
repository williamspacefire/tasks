import Header from '../view/header'
import TaskList from '../view/task'
import listLogic from '../infrastructure/task_controller'
import { AddTask } from '../view/addtask'
import { Initializer } from '../infrastructure/initializer'
import { StoreMe } from 'store-me'

export default function Index() {
    return (
        <>
            <StoreMe>
                <Initializer />
                <Header />
                <AddTask />
                <TaskList />
            </StoreMe>
        </>
    )
}
