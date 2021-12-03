import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";

function ItemCount(props) {
	const { cartList, setCartList } = useCartContext();

	console.log("ItemCount");
	console.log(props);
	// const { count,setCount,sumar,restar } = useCartContext(1)
	// const { sumar,restar,count} = useCartContext()
	const [count, setCount] = useState(props.initial);

	function sumar() {
		console.log("Sumar");
		if (count < props.stock) {
			setCount(count + 1);
			if (props.fromCart) {
                setCartList(
                    cartList.map((item) =>
                    item.item.id === props.id ? { ...item, cantidad: count + 1 } : item
					)
                    );
                } else {
                    props.onAdd(count + 1);
            }
		}

		// props.onAdd(count)
		console.log(count);
	}

	function restar() {
		if (count > 1) {
			setCount(count - 1);
			if (props.fromCart) {
                setCartList(
                    cartList.map((item) =>
                    item.item.id === props.id ? { ...item, cantidad: count - 1 } : item
					)
                    );
                } else {
                props.onAdd(count - 1);
            }
		}
	}

	// function onSumar(stock) {
	//     sumar(stock)
	// }

	return (
		<div className="h6 qtyBox d-flex align-items-center justify-content-around border w-75">
			<div
				className="btnQty qtyMinus fs-3 ps-3 text-muted"
				role="button"
				onClick={restar}
			>
				-
			</div>
			<div className="qtyInput border-0 text-center form-control shadow-none text-muted">
				{count}
				{/* {props.count} */}
			</div>
			<div
				className="btnQty qtyPlus fs-3 pe-3 text-muted"
				role="button"
				onClick={sumar}
			>
				+
			</div>
		</div>
	);
}

export default ItemCount;
