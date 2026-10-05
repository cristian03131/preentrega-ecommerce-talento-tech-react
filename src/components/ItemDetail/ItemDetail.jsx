export const ItemDetail = ({image,id,name,author,editorial,year,description,price,category}) => {
   
    return(
        <article>
            <img src={image} alt={name} />
            <h2>Id:{id}</h2>
            <p>Nombre:{name}</p>
            <p>Autor:{author}</p>
            <p>Editorial:{editorial}</p>
            <p>Año:{year}</p>
            <p>Description:{description}</p>
            <p>Categoria:{category}</p>
            <p>${price}</p>
            <button>Agregar al carrito</button>
            
        </article>
    )
}