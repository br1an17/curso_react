import { Link } from "react-router-dom"
import { Item } from "../Item/Item"
import { Boton } from "../Boton"
export const ItemList = ({list}) => {
      console.log("Lista recibida:", list);
    return (
           <>   
      {list.length ? (
        list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
           
          </Link>
          ))
        )
        : (
        <h2>Cargando productos...</h2>
      )}
    </>

    );};
