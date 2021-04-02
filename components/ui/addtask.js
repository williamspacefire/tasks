import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Fab,
    IconButton,
    Modal,
    TextField,
} from '@material-ui/core'
import { Add, Close } from '@material-ui/icons'

export function AddTask({
    handleOpenNewTaskModal,
    handleCloseNewTaskModal,
    newTaskModalOpen,
    addButtonDisabled,
    addNewTask,
    updateNewtask,
}) {
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
                <ModalContent
                    handleCloseNewTaskModal={handleCloseNewTaskModal}
                    addButtonDisabled={addButtonDisabled}
                    addNewTask={addNewTask}
                    updateNewtask={updateNewtask}
                />
            </Modal>
        </>
    )
}

function ModalContent({
    handleCloseNewTaskModal,
    addButtonDisabled,
    addNewTask,
    updateNewtask,
}) {
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
                <AddNewTask
                    addButtonDisabled={addButtonDisabled}
                    addNewTask={addNewTask}
                    updateNewtask={updateNewtask}
                />
            </CardContent>
        </Card>
    )
}

function AddNewTask({ addButtonDisabled, addNewTask, updateNewtask }) {
    return (
        <>
            <form action='/' onSubmit={addNewTask} style={{ width: '100%' }}>
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
