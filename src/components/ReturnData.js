import { Typography } from '@mui/material';
import React from 'react'


const ReturnData = ({itemValue}) => {
    console.log(itemValue);
    const {id,name} = itemValue
  return (
    <>
      <Typography>{id}</Typography>
      <Typography>{name}</Typography>
    </>
  )
}

export default ReturnData
