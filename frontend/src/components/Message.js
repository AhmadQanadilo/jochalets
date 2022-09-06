import React from 'react'
import { Alert } from '@mui/material'
function Message(props) {
  return (
    <Alert severity={props.severity}>{props.children}</Alert>
  )
}

export default Message