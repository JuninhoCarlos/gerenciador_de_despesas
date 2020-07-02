import React, { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast'
import ToastHeader from 'react-bootstrap/ToastHeader'

function MyToast(props) {
    const [show, setShow] = useState(true);

    return (
        <>

            <Toast onClose={() => {
                setShow(false)
                console.log("Closing. Index:")
                console.log(props.index)
                props.notify(props.index)
            }} show={show} delay={3000} autohide>

                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto"> {props.title} </strong>
                </Toast.Header>
                <Toast.Body> {props.msg} </Toast.Body>

            </Toast>
        </>
    )
}

export default MyToast