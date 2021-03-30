import {
    Checkbox,
    Divider,
    Fab,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Paper,
    TextField,
} from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import listLogic from "../lib/list";

export default function TaskList() {
    const {
        list,
        addNewTask,
        updateNewtask,
        handleCheck,
        deleteTask,
    } = listLogic();

    return (
        <>
            <Fab
                style={{ marginTop: "34px" }}
                color="primary"
                aria-label="Nova Tarefa">
                <Add />
            </Fab>
            <Paper style={{ marginTop: "34px" }}>
                <AddNewTask style={{ display: "none" }} />
                <List
                    component="nav"
                    subheader={
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader">
                            TAREFAS A FAZER
                        </ListSubheader>
                    }>
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
                            );
                    })}
                </List>
                <List
                    component="nav"
                    subheader={
                        <ListSubheader
                            component="div"
                            id="nested-list-subheader">
                            TAREFAS COMPLETADAS
                        </ListSubheader>
                    }>
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
                            );
                    })}
                </List>
            </Paper>
        </>
    );

    function AddNewTask() {
        return (
            <>
                <ListItem style={{ padding: "20px" }}>
                    <form action="/" onSubmit={addNewTask}>
                        <TextField
                            onChange={updateNewtask}
                            style={{ width: "100%" }}
                            id="add-new-task"
                            label="Adicionar nova tarefa"
                        />
                    </form>
                </ListItem>
            </>
        );
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
                            edge="end"
                            aria-label="delete"
                            onClick={(e) => deleteTask(e, id)}>
                            <Delete />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </>
        );
    }
}
