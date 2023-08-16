
import React, { useState } from 'react';

function Card({nombre,apellido,colorFav,index}) {
    return(
        <>  <div className="cajaUsuario">
                <p className="usuario"> Usuario Numero:{index+1}</p>
                <p><strong>Nombre: {nombre} Apelido: {apellido} Color Favorito: {colorFav}</strong></p>
            </div>
        </>
    )
}
export default Card