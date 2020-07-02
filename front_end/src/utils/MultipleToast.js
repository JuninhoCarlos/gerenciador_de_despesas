import React,{useEffect,useState} from 'react'
import MyToast from "./MyToast"

function MultipleToast(props){
    const [toast,setToast] = useState([])

    useEffect(() => {
        if (props.toast) {
            const jsx = props.toast.map((item,index) =>{ 
                return (
                    <MyToast key={index} index={index} msg={item.msg} title={item.title} removeFunction={removeToast} notify={removeToast}/>
                )});
            console.log("mudou props do multiple")
            console.log(jsx)
            
            setToast(jsx)
        }
    }, [props])

    function removeToast(index){
        console.log("receiving notify onDelete. key: " + index)
        let copy = toast.slice()
        
        copy.shift()
        setToast(copy)

        props.notifyOnClose(index)
    }

    return (<>
        <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                className="pt-3">
                {toast}

        </div>

    </>)
}

export default MultipleToast