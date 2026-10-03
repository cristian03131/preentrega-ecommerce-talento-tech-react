import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {ItemDetail} from "../ItemDetail";


export const DetailContainer = () => {
     
    const [producto, setProducto] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        
         fetch("../../../public/data/libros.json")
         .then((res) =>{
            if(!res.ok){
                throw new Error("Error, no se pudo cargar la informacion");
            }
            return res.json();
         })
         .then((data) => {
            const encontrarItem = data.find((item) => String(item.id) === String(id));

            if(encontrarItem){
                setProducto(encontrarItem);
            }
            else{
                setError("El libro solicitado no existe");
            }
         })
         .catch((err) => {
            setError(err.message);
         })
         .finally(() => {
            setLoading(false);
         });
    },[id])

    if(cargando === true) return 'Cargando...';
    if(error) return error;

    return(
        <ItemDetail {...producto}/>
    )


}