import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Divider,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Modal,
    Paper,
    TextField,
} from '@material-ui/core'
import { Add, Close, Delete } from '@material-ui/icons'
import listLogic from '../lib/list'

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

    const modalStyle = {
        position: 'absolute',
        width: '50%',
        boxShadow: '20px',
        padding: '10px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }

    return (
        <>
            <Fab
                onClick={handleOpenNewTaskModal}
                variant='extended'
                style={{ marginTop: '34px' }}
                aria-label='Nova Tarefa'
            >
                <Add />
                ADD NEW TASK
            </Fab>
            <Modal
                disableEnforceFocus
                open={newTaskModalOpen}
                onClose={handleCloseNewTaskModal}
                aria-labelledby='add-new-task'
                aria-describedby='simple-modal-description'
            >
                <Card style={modalStyle}>
                    <CardHeader
                        action={
                            <IconButton
                                aria-label='close'
                                onClick={handleCloseNewTaskModal}
                            >
                                <Close />
                            </IconButton>
                        }
                        title='Add new task'
                    />
                    <CardContent>
                        <AddNewTask />
                    </CardContent>
                </Card>
            </Modal>
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

    function AddNewTask() {
        return (
            <>
                <form
                    action='/'
                    onSubmit={addNewTask}
                    style={{ width: '100%' }}
                >
                    <TextField
                        onChange={updateNewtask}
                        style={{ width: '100%' }}
                        id='add-new-task'
                        label='Adicionar nova tarefa'
                    />
                    <Button
                        style={{ marginTop: '10px' }}
                        onClick={addNewTask}
                        variant='contained'
                        color='primary'
                        disabled={addButtonDisabled}
                    >
                        Add task
                    </Button>
                </form>
            </>
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
