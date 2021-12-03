import { createContext, useState, useContext } from "react";

// Se crea el contexto
const CartContext = createContext([]);

// Pasa el contexto creado por referencia
export const  useCartContext = ( )=> useContext(CartContext)

function CartContextProvider ({children}) {
  
    const [cartList, setCartList] = useState([])
    const [count, setCount] = useState(1);
    const [idDelete, setIdDelete] = useState(1);

    const agregarProducto = (item)=>{

        console.log("agregarProducto")
        console.log(item)
        let index = isInCart(item.item.id)

        // Si existe el item no lo agrega de nuevo
        if (index < 0) {
            setCartList( [...cartList, item] )
        }
        
    }

    const isInCart = (id) => {

        let auxCarrito = cartList
        const index = auxCarrito.findIndex( lista => lista.item.id === id )    

        return index

    }

    const vaciarCarrito = ()=>{
        setCartList([])
    }

    const eliminarItem = (id)=>{

        console.log('eliminarItem')
        let auxCarrito = cartList
        let index = isInCart(id)

        if (index >= 0 ) {
            // const index = auxCarrito.findIndex( lista => lista.item.id === id ) 
            auxCarrito.splice(index, 1)
            setIdDelete(id)
        }

        setCartList(auxCarrito)

    }

    // const sumar = (stock) => {

    //     console.log("Sumar")
    //     console.log(count)
    //     console.log(stock)
    //     if (count < stock) {
    //         setCount(count + 1)  
    //     }
    //     console.log(count)
        
    // }

    // const restar = () => {

    //     if (count > 1) {
    //         setCount(count - 1)
    //     }
    // }

    return(

        <CartContext.Provider value={ { cartList, 
                                        agregarProducto, 
                                        vaciarCarrito,
                                        eliminarItem,
                                        count,
                                        setCount,
                                        idDelete,
                                        setIdDelete
                                        // sumar,
                                        // restar 
        } }>
            {children}
        </CartContext.Provider>

    )

}

export default CartContextProvider