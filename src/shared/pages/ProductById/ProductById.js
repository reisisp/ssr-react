import React from "react";
import cl from './ProductById.module.css'

export const ProductById = (props) => {
    const product = props.data;

    return (
        <div className={cl.container}>
            <article className={cl.product}>
                <div className={cl.product__img}>
                    <img className={cl.img} src="https://i.ibb.co/6b8fbVq/orig.jpg" alt="product" />
                </div>
                <div className={cl.product__content}>
                    <p className={cl.product__title}>{product.product_name} {product.model}</p>
                    {product.color ? <p className={cl.product__info}>Цвет&nbsp;:&nbsp;{product.color}</p> : <span></span>}
                    <p className={cl.product__info}>Характеристики: <br />{product.characteristic}</p>
                    <p className={cl.product__info}>Цена&nbsp;:&nbsp;<span className={cl.product__price}>{product.price} P</span></p>
                </div>
            </article >
        </div >

    )
}