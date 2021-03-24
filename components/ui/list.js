import { Checkbox, Divider, Fab, List, ListItem, ListItemText, ListSubheader, Paper, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";

export default function TaskList() {

    const [list, setList] = useState([])
    let newTask = ""

    return (
        <>
            <Fab style={{marginTop: "34px"}} color="primary" aria-label="Nova Tarefa">
                <Add/>
            </Fab>
            <Paper style={{marginTop: "34px"}}>
                <AddNewTask style={{display: "none"}}/>
                <List 
                    component="nav"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            TAREFAS A FAZER
                        </ListSubheader>
                    }>
                        <Divider/>
                        {
                            list.map((task, index) => {
                                if (!task.completed)return <TaskListItem key={index} title={task.task} checked={task.completed} id={index}/>
                            })
                        }
                </List>
                <List 
                    component="nav"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            TAREFAS COMPLETADAS
                        </ListSubheader>
                    }>
                        <Divider/>
                        {
                            list.map((task, index) => {
                                if (task.completed) return <TaskListItem key={index} title={task.task} checked={task.completed} id={index}/>
                            })
                        }
                    </List>
            </Paper>
        </>
    )

    function addNewTask(e) {
        e.preventDefault()

        setList([...list, {completed: false, task: newTask}])
        console.log(JSON.stringify(list, null, 2))
    }

    function updateNewtask(e) {
        newTask = e.target.value
    }

    function handleCheck(e) {
        const id = e.target.id
        const cheked = e.target.checked
        list[id].completed = cheked
        
        setList([...list])
    }

    function AddNewTask() {
        return (
            <>
                <ListItem style={{padding: "20px"}}>
                    <form action="/oi" onSubmit={(e) => addNewTask(e)}>
                        <TextField onChange={(e) => updateNewtask(e)} style={{width: "100%"}} id="standard-basic" label="Adicionar nova tarefa" />
                    </form>
                </ListItem>
            </>
        )
    }
    
    function TaskListItem({ title, checked, id }) {
        return (
            <>
                <ListItem>
                    <ListItemText>
                        <Checkbox checked={checked} id={id} onChange={(e) => handleCheck(e)}/>
                        {title}
                    </ListItemText>
                </ListItem>
            </>
        )
    }
}