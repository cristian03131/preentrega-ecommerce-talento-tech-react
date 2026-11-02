import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { getProductById } from "../../services/productsService";


export const ItemDetailContainer = () => {
     
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
    setProducto(null);
    setLoading(true);
    setError(null);

    getProductById(id)
      .then((data) => {
        if (data) {
          setProducto(data);
        } else {
          setError("El libro solicitado no existe");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

    if(cargando === true) return 'Cargando...';
    if(error) return error;
    if (!producto) return <p>Producto no encontrado</p>;

    return(
        <ItemDetail {...producto}/>
    )


}