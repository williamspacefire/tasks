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
import { TASK_COMPLETED, TASK_TO_DO } from '../lib/task_controller'

//TODO: Remove duplicate code
export default function TaskList({ handleCheck, list, deleteTask }) {
    return (
        <>
            <Paper style={{ marginTop: '34px' }}>
                <TaskList
                    title='TAREFAS A FAZER'
                    type={TASK_TO_DO}
                    tasks={list}
                />
            </Paper>
            <Paper style={{ marginTop: '34px' }}>
                <TaskList
                    title='TAREFAS COMPLETADAS'
                    type={TASK_COMPLETED}
                    tasks={list}
                />
            </Paper>
        </>
    )

    function TaskList({ tasks, title, type }) {
        const getListTypeCondition = (task, type) => {
            if (type == TASK_COMPLETED) {
                return task.completed
            } else {
                return !task.completed
            }
        }

        return (
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
                            <TaskListItem
                                key={index}
                                title={task.task}
                                checked={task.completed}
                                id={index}
                            />
                        )
                })}
            </List>
        )
    }

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
