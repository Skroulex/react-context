import React, {useContext, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {todoContext} from "../../contexts/todoContext";

const Add = () => {
    const {createTodo} = useContext(todoContext)
    const [todo, setTodo] = useState('')

    function handleSave() {
        let newTodo = {
            todo,
        }
        createTodo(newTodo)
        console.log(newTodo)
    }

    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <TextField value={todo} onChange={e => setTodo(e.target.value)} label="Outlined" variant="outlined"/>
            <Button onClick={() => handleSave()} style={{
                height: '55px',
                marginLeft: '10px'
            }} variant="contained" color="secondary">Add</Button>
        </Box>
    );
};

export default Add;
