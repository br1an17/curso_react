import { useEffect, useState } from 'react'
import { ItemList } from '../itemList/itemList.jsx'
export const ItemListContainer = () => {
    const[products, setProducts] = useState([])
    

    useEffect(() => {
        fetch("/data/products.json")
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
    <section className='itemListContainer'>
        <h1>Bienvenido</h1>
        <ItemList list={products}/>
    </section>
    )
    }