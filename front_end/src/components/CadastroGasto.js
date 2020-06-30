import React from "react"
import {useFormik} from 'formik'


function CadastroGasto() {
    
    const {handleSubmit, handleChange} = useFormik({
        initialValues: {
            valor: '',
            categoria: '',
            data: ''
        },
        onSubmit: values => {
            console.log(values)
        }
    })

    return (

        <React.Fragment>
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
                        <option>Alimentação</option>
                        <option>Besteira</option>
                        <option>Gastos fixos</option>
                    </select>

                    <label> Data: </label>
                    <input type="date" name="data" id="data" onChange={handleChange} className="form-control" />

                    <button type="submit" className="btn btn-dark mt-4 float-right">Salvar</button>
                </form>

            </div>
        </React.Fragment>
    )
}

export default CadastroGasto 