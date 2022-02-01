import React from "react";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import cl from './ProductAdd.module.css'

export const ProductAdd = () => {
    return (
        <section className={cl.product}>
            <h1 className={cl.product__title}>Создать новый товар</h1>
            <ProductForm />
        </section>
    )
}