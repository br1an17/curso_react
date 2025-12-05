import { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/itemDetail.jsx";
import { useParams } from "react-router-dom";

// export const ItemDetailContainer = () => {
//   const [detail, setDetail] = useState({});

//   const { id } = useParams();

//   useEffect(() => {
//     fetch("/data/products.json")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("No se encontro el producto");
//         }

//         return res.json();
//       })
//       .then((data) => {
//         const found = data.find((p) => p.id === id);//Usamos el param para comparar el id del producto en el json
//         if (found) {
//           setDetail(found);
//         } else {
//           throw new Error("Producto no encontrado");
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [id]);

//   return (
//     <main>
//       {Object.keys(detail).length ? (
//         <ItemDetail detail={detail} />
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </main>
//   );
// };


import { getProductById } from "../../services/products";


export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    const {id} = useParams();

    useEffect(() => {
        getProductById(id)
        .then((data) => {
            if(data){
              setDetail(data);
            }else{
              throw new Error("Producto no encontrado");
            }
        })    
        .catch((err) => {
        console.log(err);
      });
    }, [id]);

 return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
 );

};