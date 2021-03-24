import { Checkbox, Divider, Fab, List, ListItem, ListItemText, ListSubheader, Paper, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useState } from "react";

export default function TaskList() {

    let tasks = []
    const [list, setList] = useState(["ola", "blz"])
    let newTask = ""

    return (
        <>
            <Fab style={{marginTop: "34px"}} color="primary" aria-label="Nova Tarefa">
                <Add/>
            </Fab>
            <Paper style={{marginTop: "34px"}}>
                <List 
                    component="nav"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                        Tarefas para fazer
                        </ListSubheader>
                    }>
                        <AddNewTask style={{display: "none"}}/>
                        <Divider/>
                        {
                            list.map((title, index) => {
                                return <TaskListItem key={index} title={title}/>
                            })
                        }
                </List>
            </Paper>
        </>
    )

    function addNewTask(e) {
        e.preventDefault()
        
        tasks.push(newTask)
        setList([tasks])
        newTask = ""
        console.log(tasks)
    }

    function updateNewtask(e) {
        newTask = e.target.value
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
    
    function TaskListItem({ title }) {
        return (
            <>
                <ListItem>
                    <ListItemText>
                        <Checkbox checked={false} />
                        {title}
                    </ListItemText>
                </ListItem>
            </>
        )
    }
}