import React, { useEffect, useState } from "react"
import { useFormik } from 'formik'
import axios from "axios"
import MultipleToast from "../utils/MultipleToast"

function CadastroGasto() {

    const apiUrl = "http://localhost:8000/api/v1/"
    const [categorias, setCategorias] = useState()
    
    const [toast, setToast] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        axios.get(apiUrl + "categoria")
            .then(res => {
                const cat = res.data
                const text = cat.map((item) => {
                    return <option key={item.id} value={item.id}> {item.nome} </option>
                })
                setCategorias(text)
            })

    }, [])

    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
            valor: '',
            categoria: '',
            data: ''
        },
        onSubmit: values => {
            //console.log(values)
            let copy = toast.slice()
            copy.push({msg: "Ola: " + count,title:"success"})
            setToast(copy)
            
            setCount(count+1)
            console.log(copy)

        }
    })

    function notifyOnClose(index){       
        let copy = toast.slice()
        copy.shift()
        
        setToast(copy)
        
        console.log("new toasts: ",copy)
    }

    return (

        <div
            aria-live="polite"
            aria-atomic="true"
            style={{
                position: 'relative',
                minHeight: '200px',
            }}>


            <MultipleToast toast={toast} notifyOnClose={notifyOnClose}/>


            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Cadastro de gasto</h1>
            </div>

            <div className="form-group w-25">
                <form onSubmit={handleSubmit}>
                    <label>Valor: </label>
                    <input type="text" name="valor" onChange={handleChange} className="form-control mb-2" id="valor" placeholder="R$ 0.00" aria-label="valor em (x.xx)" />

                    <label>Categoria</label>
                    <select name="categoria" className="form-control mb-2" onChange={handleChange} id="Categoria">
                        <option>Selecione</option>
                        {categorias}
                    </select>

                    <label> Data: </label>
                    <input type="date" name="data" id="data" onChange={handleChange} className="form-control" />

                    <button type="submit" className="btn btn-dark mt-4 flex-column float-right">Salvar</button>
                </form>
            </div>

        </div>
    )
}

export default CadastroGasto 