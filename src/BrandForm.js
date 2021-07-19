import {useState} from 'react'

function BrandForm(props){

    let [errors, setErrors] = useState(null)
    let [success, setSuccess] = useState(false)

    let [data, setData] = useState({
        name: null
    })

    function sendForm(e) {
        console.log(e)

        e.preventDefault() //Cancelo el evento y hago la logica con el script

        fetch('http://localhost:4000/api/brands',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => {
        if (response.status != 201){
            //error
            setErrors(response.json())
        }else{
            // informar que salio bien
            setSuccess(true)
            setErrors(null)
        }
    })
    }

    function handleInput(e){
        let inputName = e.target.name

        setData({
            ...data,
            [inputName]: e.target.value
        })
    }

    return (
        <>

        {props.children}

        {
            errors ? <h2>Revise todos los campos</h2> :  ''
        }

    <form method="POST" action="/brands" noValidate autoComplete="off" onSubmit={sendForm}>
        <div>
            <label htmlFor="brand-name">Nombre</label>
            <input type="text" name="name" value={data.title} onInput={handleInput}/>
        </div>

        <div>
            <button>Enviar</button>
        </div>
        
    </form>

        </>
    )
}

export default BrandForm