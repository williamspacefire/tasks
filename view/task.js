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
import { useStoreMe } from 'store-me'
import {
    deleteTask,
    getListTypeCondition,
    handleCheck,
    TASK_COMPLETED,
    TASK_TO_DO,
} from '../infrastructure/task_controller'

//TODO: Remove duplicate code
export default function TaskList() {
    const { tasks } = useStoreMe('tasks')

    return (
        <>
            <TaskListGroup
                title='TAREFAS A FAZER'
                type={TASK_TO_DO}
                tasks={tasks}
            />
            <TaskListGroup
                title='TAREFAS COMPLETADAS'
                type={TASK_COMPLETED}
                tasks={tasks}
            />
        </>
    )
}

export function TaskListGroup({ tasks, title, type }) {
    return (
        <Paper style={{ marginTop: '34px' }}>
            <List
                component='nav'
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        {title}
                    </ListSubheader>
                }
            >
                <Divider />
                {tasks.map((task, index) => {
                    if (getListTypeCondition(task, type))
                        return (
                            <TaskListGroupItem
                                key={index}
                                title={task.task}
                                checked={task.completed}
                                id={index}
                            />
                        )
                })}
            </List>
        </Paper>
    )
}

export function TaskListGroupItem({ title, checked, id }) {
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
