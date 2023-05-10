import React from "react";
import {ListItem,Button} from '@mui/material'

import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DeleteIcon from "@mui/icons-material/Delete"


const ListComponent = (props) => {
  
  return (
    <>
      <ListItem>
        <ListItemIcon>
          <ArrowRightIcon fontSize="large" sx={{ color: "#bf74cc" }} />
        </ListItemIcon>
        {props.text}
        <Button
          variant="outlined"
          color="error"
          size="small"
          sx={{
            position: "absolute",
            right: "0",
            marginRight: "10px",
          }}
          onClick={()=>{
            props.onSelect(props.id)
          }}
        >
          <DeleteIcon color="error" fontSize="small" sx={{ width: "20px" }}  />
        </Button>
      </ListItem>
    </>
  );
};

export default ListComponent;
