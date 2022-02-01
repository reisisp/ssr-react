import React, { useState } from "react";
import { ProductList } from "../../components/ProductList/ProductList";

export const Products = (props) => {
    return (
        <ProductList products={props.data} />
    )
}