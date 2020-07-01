import React from "react"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function AlertDismissible(props) {
    
  
    return (
      <div className="mt-2">
        <Alert show={props.alert.show} variant={props.alert.variant} >
            {props.alert.msg}
        </Alert>
      </div>
    );
}

export default AlertDismissible