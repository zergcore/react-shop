import React, {useState} from 'react';
import '@styles/ProductItem.scss';

import addToCart from "@icons/bt_add_to_cart.svg";
const image = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const ProductItem = ({product}) => {
	const [cart, setCart] = useState([]);
	const handleClick = () =>{
		setCart([]);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="" />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleClick}>
					<img src={addToCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;