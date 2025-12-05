import { useCartContext } from "../../context/CartContext/UseCartContext.js";
import { Item } from "../Item/Item.jsx";
import { Count } from "../Count/Count.jsx";

export const ItemDetail = ({ detail }) => {
  const { addItem } = useCartContext();

  const handleAdd = (quantity) => {
    addItem({ ...detail, quantity });
  };
  return (
    <div className="container-detail">
      <h2>Detalle del producto:</h2>
      <Item {...detail}>
        <p>{detail.info}</p>
        <Count text={"Agregar al carrito"} onConfirm={handleAdd} />
      </Item>
    </div>
  );
};
