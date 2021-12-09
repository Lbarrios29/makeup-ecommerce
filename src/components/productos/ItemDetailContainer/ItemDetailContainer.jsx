/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../Firebase/firebase';
// import getProductFiltered from '../../../Firebase/firebase';
// import { getProductos } from '../../../utils/getProductos'
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {

    const [itemSeleccionado, setItemSeleccionado]= useState({}); 
    const [loading, setLoading] = useState(true);

    const { id } = useParams(); //toma el parametro de la url y lo guarda en una variable id.

    useEffect(async () => {

        try {
            // Parametros: (collection,field,operator,condition)
            // const item = await getProductFiltered('productos','__name__','==',id)
            // setItemSeleccionado(item[0])

            const item = await getProductById('productos',id)
            setItemSeleccionado(item)
        }
        catch (error) {
            console.log(error)    
        }
        finally{
            setLoading(false)
        }

    },[id])

    return (

        <div className="container-sm container-md container-lg">

            {
                loading ? <h2>Cargando...</h2> 
                        : <ItemDetail item={itemSeleccionado}/>
            }

        </div>

    )
}

export default ItemDetailContainer
