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

//TODO: Remove duplicate code
export default function TaskList({ handleCheck, list, deleteTask }) {
    return (
        <>
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
            </Paper>
            <Paper style={{ marginTop: '34px' }}>
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
