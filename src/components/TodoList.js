import React from "react";
import { useState } from "react";

import {
  Box,
  Button,
  Container,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect } from "react";

import ListComponent from "./ListComponent";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

// Get Data from Local Storage
const getDataFromLS = () => {
  let list = localStorage.getItem("DataList");

  if (list) {
    return JSON.parse(localStorage.getItem("DataList"));
  } else {
    return [];
  }
};

//TodoList
const TodoList = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState(getDataFromLS());

  useEffect(() => {
    localStorage.setItem("DataList", JSON.stringify(items));
  }, [items]);

  // ItemEvent
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  // AddItems
  const addItem = () => {
    if (inputList) {
      setItems((oldItems) => {
        const data = [...oldItems, inputList];
        return data;
      });
      setInputList("");
    }
  };

  // DeleteItems
  const DeleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  // Clear All Items
  const clearAll = () => {
    setItems([]);
  };

  return (
    <>
      <Container maxWidth="xs" sx={{ marginTop: "20px" }}>
        <Box
          sx={{
            background: "#dedede",
            borderRadius: "12px",
            height: "auto",
            paddingBottom: "20px",
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
            {/* inputList */}
            <TextField
              label="Enter a Task"
              variant="standard"
              color="secondary"
              sx={{ width: "90%" }}
              value={inputList}
              onChange={itemEvent}
              autoFocus
            />
            <Button
              variant="outlined"
              size="small"
              onClick={addItem}
              color="secondary"
            >
              <AddIcon fontSize="large" />
            </Button>
          </Stack>

          <List
            sx={{
              height: "200px",
              background: "#ebebeb",
              borderRadius: "12px",
              overflowY: "scroll",
              margin: "30px 10px",
            }}
          >
            {items.map((itemValue, index) => {
              return (
                <ListComponent
                  text={itemValue}
                  id={index}
                  key={index}
                  onSelect={DeleteItems}
                />
              );
            })}
          </List>

          {items.length >= 1 && (
            <Stack alignItems="center">
              <Button
                variant="contained"
                color="error"
                sx={{ margin: "10px" }}
                endIcon={<DeleteIcon />}
                onClick={clearAll}
              >
                Clear All
              </Button>
            </Stack>
          )}
          <pre style={{ textAlign: "center", marginTop: "20px" }}>
            DESIGNED BY WAQAR-ABBAS
          </pre>
        </Box>
      </Container>
    </>
  );
};

export default TodoList;
