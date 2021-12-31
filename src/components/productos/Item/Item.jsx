import React from 'react'
import { Link } from 'react-router-dom';
import './item.css'


function Item(props) {

    /**
        @todo:  Componente que renderiza cada producto
    **/

    return (

        <div className="col">
            <div className="card h-100 w-75 card-ancho">                                            
                
                <Link to={`/detalle/${props.producto.id}`}>
                    <img src={props.producto.imagen} 
                        className="card-img-top img-fluid" 
                        alt={props.producto.descripcion}/>                                                
                </Link>
                
                <div className="card-body">
                                                
                    {/*Nombre Producto*/}
                    <div className="card-title pt-3 fw-bold productoMakeup pb-2">
                        {props.producto.nombre}
                    </div>
                                                    
                    {/*Precio*/}
                    <div className="h6 text-muted">
                        {'$ ' + parseFloat(props.producto.precio).toFixed(2)}
                    </div>
                                                    
                    {/*Stock*/}
                    <div className="h6 text-muted">
                        {props.producto.stock} disponibles
                    </div>
                                                
                </div>

            </div>
        </div>
    )
}

export default Item
