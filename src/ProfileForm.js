import {useState} from 'react'

function ProfileForm(props){

    let [errors, setErrors] = useState(null)
    let [success, setSuccess] = useState(false)

    let [data, setData] = useState({
        firstName: null,
        lastName: null,
        userName: null,
        phoneNumber: null,
        birthDate: null,
    })

    function sendForm(e) {
        console.log(e)

        e.preventDefault() //Cancelo el evento y hago la logica con el script

        fetch('http://localhost:4000/api/profiles',{
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

    <form method="POST" action="/profiles" noValidate autoComplete="off" onSubmit={sendForm}>
        <div>
            <label htmlFor="profile-firstname">Nombre</label>
            <input type="text" name="firstName" value={data.title} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="profile-lastName">Apellido</label>
            <input type="text" name="lastName" value={data.lastName} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="profile-userName">Nombre de usuario</label>
            <input type="text" name="userName" value={data.userName} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="profile-phoneNumber">Teléfono</label>
            <input type="text" name="phoneNumber" value={data.phoneNumber} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="profile-birthDate">Fecha de nacimiento</label>
            <input type="date" name="birthdate" value={data.birthDate} onInput={handleInput}/>
        </div>

        <div>
            <button>Enviar</button>
        </div>
        
    </form>

        </>
    )
}

export default ProfileForm