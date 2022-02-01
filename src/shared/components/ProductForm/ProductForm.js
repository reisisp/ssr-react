import React, { useState } from "react";
import { CustomBtn } from "../UI/btn/CustomBtn";
import { FormInput } from "../UI/input/FormInput";
import cl from './ProductForm.module.css'

export const ProductForm = () => {
    const [product, setProduct] = useState({
        product_name: '',
        model: '',
        color: '',
        characteristic: '',
        price: ''
    })

    const sendNewProduct = async () => {
        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        }
        const response = await fetch('http://localhost:3000/api/product/create', reqOptions);
    }


    return (
        <form className={cl.form}>
            <FormInput type="text" placeholder='Товар' value={product.product_name} onChange={e => setProduct({ ...product, product_name: e.target.value })} />
            <FormInput type="text" placeholder='Модель товара' value={product.model} onChange={e => setProduct({ ...product, model: e.target.value })} />
            <FormInput type="text" placeholder='Цвет' value={product.color} onChange={e => setProduct({ ...product, color: e.target.value })} />
            <FormInput type="text" placeholder='Характеристики' value={product.characteristic} onChange={e => setProduct({ ...product, characteristic: e.target.value })} />
            <FormInput type="number" placeholder='Цена' value={product.price} onChange={e => setProduct({ ...product, price: e.target.value })} />
            <CustomBtn onClick={sendNewProduct}>Создать товар</CustomBtn>
        </form>
    )
}