import {
    Checkbox,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Paper,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import listLogic from '../lib/list'
import { AddTask } from './addtask'

export default function TaskList() {
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
            <AddTask
                handleCloseNewTaskModal={handleCloseNewTaskModal}
                handleOpenNewTaskModal={handleOpenNewTaskModal}
                newTaskModalOpen={newTaskModalOpen}
                addButtonDisabled={addButtonDisabled}
                addNewTask={addNewTask}
                updateNewtask={updateNewtask}
            />
            <Paper style={{ marginTop: '34px' }}>
                <List
                    component='nav'
                    subheader={
                        <ListSubheader
                            component='div'
                            id='nested-list-subheader'
                        >
                            TAREFAS A FAZER
                        </ListSubheader>
                    }
                >
                    <Divider />
                    {list.map((task, index) => {
                        if (!task.completed)
                            return (
                                <TaskListItem
                                    key={index}
                                    title={task.task}
                                    checked={task.completed}
                                    id={index}
                                />
                            )
                    })}
                </List>
                <List
                    component='nav'
                    subheader={
                        <ListSubheader
                            component='div'
                            id='nested-list-subheader'
                        >
                            TAREFAS COMPLETADAS
                        </ListSubheader>
                    }
                >
                    <Divider />
                    {list.map((task, index) => {
                        if (task.completed)
                            return (
                                <TaskListItem
                                    key={index}
                                    title={task.task}
                                    checked={task.completed}
                                    id={index}
                                />
                            )
                    })}
                </List>
            </Paper>
        </>
    )

    function TaskListItem({ title, checked, id }) {
        return (
            <>
                <ListItem>
                    <ListItemText>
                        <Checkbox
                            checked={checked}
                            id={id}
                            onChange={handleCheck}
                        />
                        {title}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton
                            edge='end'
                            aria-label='delete'
                            onClick={e => deleteTask(e, id)}
                        >
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </>
        )
    }
}
