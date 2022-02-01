import React, { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NoMatch } from "./pages/NoMatch";
import routes from "../server/routes/visible/routes";
import { Header } from "./components/Header/Header";
import './styles.css'
import axios from "axios";


export const App = (props) => {
    let [products, setProducts] = useState(props.data || [])
    
    const searchString = async (text) => {
        const res = await axios.get(`/api/products/search/${text}`)
        if (Array.isArray(res.data)) {
            console.log(res.data)
        }
    }

    return (
        <Fragment>
            <Header search={searchString} />
            <div className='container'>
                <Routes>
                    {routes.map((route) => {
                        const { path, component: C } = route;
                        return (<Route
                            key={path}
                            path={path}
                            element={<C data={products} />}
                        />)
                    })}
                    <Route path='*' element={<NoMatch data={products} />} />
                </Routes>
            </div>
        </Fragment>
    )
}
