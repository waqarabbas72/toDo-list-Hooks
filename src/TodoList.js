import React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const TodoList = () => {
  const [inputList, setInputList] = useState(" ");
  const [items , setItems] = useState([])

  const itemEvent = (e) => {
    setInputList(e.target.value);
};

const addItem = (e) => {
    setItems((oldItems) =>{
        return [...oldItems , inputList]
    })
    setInputList("")
  };
    
  return (
    <>
      <Container maxWidth="sm" sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            background: "#dedede",
            borderRadius: "12px",
            height: 500,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            color="white"
            align="center"
            py={1}
            sx={{ background: "#bf74cc" }}
          >
            ToDo-List
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.4}
            sx={{ margin: "10px" }}
          >
            <TextField
              label="Enter a Task"
              variant="standard"
              sx={{ width: "90%" }}
              onChange={itemEvent}
              value={inputList}
            />
            <Button variant="outlined" onClick={addItem}>
              <AddIcon color="primary" fontSize="large" />
            </Button>
          </Stack>

          <List
            sx={{
              height: "200px",
              background: "#baaebd",
              borderRadius: "12px",
              overflowY: "scroll",
              margin: "30px 10px",
            }}
          >
            {items.map((itemValue)=>{
               return(
                <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon fontSize="large" sx={{ color: "black" }} />
                </ListItemIcon>
                {itemValue}
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ position: "absolute", right: "0",marginRight:"10px" }}
                >
                  <DeleteIcon
                    color="error"
                    fontSize="small"
                    sx={{ width: "20px" }}
                  />
                </Button>
              </ListItem>
               )
            })}
          </List>

          <Stack alignItems="center">
            <Button
            variant="contained"
            color="error"
            sx={{ margin: "10px", }}
            endIcon={<DeleteIcon />}
            
          >
            Clear All
          </Button></Stack>
          <pre style={{textAlign:"center" , marginTop:"20px"}}>DESIGNED BY WAQAR-ABBAS</pre>
        </Box>
      </Container>
    </>
  );
};

export default TodoList;
