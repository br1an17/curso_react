import { useEffect, useState } from 'react'

export const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    

    useEffect(() => {
        fetch("/data/productos.json")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Hubo un error al cargar los productos")
            }
            return res.json()
        })
         .then((data)=>{
            setProducts(data)
         })
         .catch((error)=> console.log(error))


    }, [])

    return (
    <section>
        <h1>Bienvenido</h1>
        <ItemList list={products}/>
    </section>
    )
    }