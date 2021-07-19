import {useState} from 'react'

function ProductForm(props){

    let [errors, setErrors] = useState(null)
    let [success, setSuccess] = useState(false)

    let [brands, setBrands] = useState([
        {
            _id: 1,
            name: "Sony"
        },
        {
            _id: 2,
            name: "LG"
        },
        {
            _id: 3,
            name: "Nintendo"
        },
        {
            _id: 4,
            name: "Playstation"
        },
        {
            _id: 5,
            name: "Thonet & Vander"
        },
        {
            _id: 6,
            name: "Phillips"
        }
    ])

    let [data, setData] = useState({
        title: null,
        description: null,
        price: null,
        stock: 1,
        model: null,
        brand: null,
        seller_id: null
    })

    function sendForm(e) {
        console.log(e)

        e.preventDefault() //Cancelo el evento y hago la logica con el script

        fetch('http://localhost:4000/products',{
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

    <form method="POST" action="/products" noValidate autoComplete="off" onSubmit={sendForm}>
        <div>
            <label htmlFor="product-title">Título del producto</label>
            <input type="text" name="title" value={data.title} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="product-description">Descripción del Producto</label>
            <textarea name="description" value={data.description} onInput={handleInput}></textarea>
        </div>

        <div>
            <label htmlFor="product-price">Precio del producto</label>
            <input type="number" name="price" min="0" value={data.price} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="product-stock">Stock del Producto</label>
            <input type="number" name="stock" min="0" value={data.stock} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="product-model">Modelo del Producto</label>
            <input type="text" name="model" value={data.model} onInput={handleInput}/>
        </div>

        <div>
            <label htmlFor="product-brand">Marca</label>
            <select name="brand" value={data.brand} onInput={handleInput}>
                <option value=""></option>
                
                {brands.map(brand => {
                    return <option value={brand._id}>{brand.name}</option>
                })}

            </select>
        </div>

        <div>
            <label htmlFor="product-seller_id">Id del vendedor</label>
            <input type="number" name="seller_id" value={data.seller_id} onInput={handleInput}/>
        </div>

        <div>
            <button>Enviar</button>
        </div>
        
    </form>

        </>
    )
}

export default ProductForm