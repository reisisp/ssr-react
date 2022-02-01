import { ProductAdd } from "../../../shared/pages/ProductAdd/ProductAdd"
import { ProductById } from "../../../shared/pages/ProductById/ProductById"
import { Products } from "../../../shared/pages/Products/Products"

const routes = [
    {
        path: '/products',
        component: Products,
    },
    {
        path: '/product/:id',
        component: ProductById,
    },
    {
        path: '/create',
        component: ProductAdd,
    }
]

export default routes


