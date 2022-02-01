import React from "react";
import cl from './ProductItem.module.css'

export const ProductItem = ({ product }) => {

    return (
        <article onClick={() => window.open(`http://localhost:3000/product/${product._id}`, '_self')} className={cl.card} key={product._id}>
            <div className={cl.card__img}>
                <img className={cl.img} src="https://i.ibb.co/6b8fbVq/orig.jpg" alt="product" />
            </div>
            <div className={cl.card__content}>
                <p className={cl.card__title}>{product.product_name} {product.model}</p>
                <p className={cl.card__price}>{product.price} P</p>
            </div>
        </article>
    )
}