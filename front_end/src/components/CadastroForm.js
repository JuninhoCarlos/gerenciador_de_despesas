import React,{useEffect,useState} from 'react'

import Formik,{useFormik} from 'formik'
import axios from 'axios' 

function CadastroForm(props) {

    const apiUrl = "http://localhost:8000/api/v1/"
    const [categorias, setCategorias] = useState()
    
    useEffect(() => {
        console.log("fetching")
        axios.get(apiUrl + "categoria")
            .then(res => {
                const cat = res.data
                const text = cat.map((item) => {
                    return <option key={item.id} value={item.id}> {item.nome} </option>
                })
                setCategorias(text)
            })
    }, [])

    const formik = useFormik({
        initialValues: {
            valor: '',
            categoria: '',
            descricao: '',
            data: '',
            categoria : '',
        },

        onSubmit: (values, { resetForm }) => {
            
            resetForm({})

            const data = {
                valor: parseFloat(values.valor.replace(',', '.')),
                categoria: parseInt(values.categoria),
                descricao: values.descricao,
                data: values.data
            }

            console.log(data)


            axios.post(apiUrl + "despesa/", data)
                .then(res => {
                    props.successCallBack()
                }).catch(error => {
                    props.errorCallBack(error)
                })

        }
    })

    

    return (
        <div className="form-group w-25">
            <form onSubmit={formik.handleSubmit}>
                <label>Valor: </label>
                <input type="text" name="valor" value={formik.values.valor} onChange={formik.handleChange} className="form-control mb-2" id="valor" placeholder="R$ 0.00" aria-label="valor em (x.xx)" />

                <label>Categoria</label>
                <select name="categoria" className="form-control mb-2" value={formik.values.categoria} onChange={formik.handleChange} id="Categoria">
                    <option>Selecione</option>
                    {categorias}
                </select>

                <label>Descricao</label>
                <input type="text" name="descricao" value={formik.values.descricao} onChange={formik.handleChange} className="form-control mb-2" id="descricao" placeholder="Descrição" />

                <label> Data: </label>
                <input type="date" name="data" id="data" onChange={formik.handleChange} value={formik.values.data} className="form-control" />

                <button type="submit" className="btn btn-dark mt-4 flex-column float-right">Salvar</button>
            </form>
        </div>)
}

export default CadastroForm