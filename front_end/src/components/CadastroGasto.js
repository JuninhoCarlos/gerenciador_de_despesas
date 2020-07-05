import React, { useEffect, useState } from "react"
import { useFormik } from 'formik'
import axios from "axios"
import MultipleToast from "../utils/MultipleToast"
import CadastroForm from "./CadastroForm"

function CadastroGasto() {

    const [toast, setToast] = useState()
    
    function notifyOnClose(index) {
        let copy = toast.slice()
        copy.shift()

        if (copy.length === 0) {
            setToast()
            return
        }
        setToast(copy)

    }

    function displayToast(msg, title) {
        let copy = (!toast) ? [] : toast.slice()
        copy.push({ msg: msg, title: title })
        setToast(copy)
    }

    function success(){
        displayToast("Gasto Cadastrado com sucesso", "successo")
    }

    function error(error){
        console.log("ola erro:", error)
    }

    return (

        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '200px',
            }}>


            <MultipleToast toast={toast} notifyOnClose={notifyOnClose} />


            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Cadastro de gasto</h1>
            </div>

            <CadastroForm successCallBack={success} errorCallBack={error} />

        </div>
    )
}

export default CadastroGasto 