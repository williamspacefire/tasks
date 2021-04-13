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
import { useStoreMe } from 'store-me'
import {
    addNewTask,
    changeModalVisibility,
    updateNewtask,
} from '../infrastructure/task_controller'

export function AddTask() {
    const { isModalOpen } = useStoreMe('isModalOpen')

    return (
        <>
            <Fab
                onClick={() => changeModalVisibility()}
                variant='extended'
                style={{ marginTop: '34px' }}
                aria-label='Nova Tarefa'
            >
                <Add />
                ADD NEW TASK
            </Fab>
            <Modal
                disableEnforceFocus
                open={isModalOpen}
                onClose={() => changeModalVisibility()}
                aria-labelledby='add-new-task'
                aria-describedby='simple-modal-description'
            >
                <ModalContent />
            </Modal>
        </>
    )
}

function ModalContent() {
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
                        onClick={() => changeModalVisibility()}
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
    )
}

function AddNewTask() {
    const { isAddTaskButtonDisabled } = useStoreMe('isAddTaskButtonDisabled')

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
                    disabled={isAddTaskButtonDisabled}
                >
                    Add task
                </Button>
            </form>
        </>
    )
}
