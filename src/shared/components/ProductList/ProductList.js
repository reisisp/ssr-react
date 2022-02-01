import React, { useState } from "react";
import { ProductItem } from "../ProductItem/ProductItem";
import cl from './ProductList.module.css'

export const ProductList = ({ products }) => {
    const [allProducts, setAllProducts] = useState(products || []);

    return (
        <section className={cl.products}>
            {allProducts.map((product) =>
                <ProductItem product={product} key={product._id} />
            )}
        </section>
    )
}