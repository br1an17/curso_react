// import { useEffect, useState } from 'react'
// import { ItemList } from '../itemList/itemList.jsx'
// export const ItemListContainer = () => {
//     const[products, setProducts] = useState([])
    

//     useEffect(() => {
//         fetch("/data/products.json")
//         .then((res)=>{
//             if(!res.ok){
//                 throw new Error("Hubo un error al cargar los productos")
//             }
//             return res.json()
//         })
//          .then((data)=>{
//             setProducts(data)
//          })
//          .catch((error)=> console.log(error))


//     }, [])

//     return (
//     <section className='itemListContainer'>
//         <h1>Bienvenido</h1>
//         <ItemList list={products}/>
//     </section>
//     )
//     }


import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/itemList.jsx"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { getProducts } from "../../services/products.js"

export const ItemListContainer = ({titulo}) => {
  const [products, setProducts] = useState([])
  const {category} = useParams()
  
  useEffect(() => {
  getProducts(category)
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err)
    });

  }, [category])

  return (
    <section >
      <h2>{titulo}<span className="text-category">{category}</span></h2>
      <ItemList list={products}/>
    </section>
  )
}