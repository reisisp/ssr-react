const { Router } = require('express');
const productsRouter = Router();
const Product = require('../../models/Product');


productsRouter.get('/api/products/all', async (req, res) => {
    const products = await Product.find({});
    res.json(products)
})

productsRouter.get('/api/products/search/:model', async (req, res) => {
    const model = await Product.find({ model: `${req.params.model}` });

    res.json(model)
})

productsRouter.get('/api/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

productsRouter.post('/api/product/create', async (req, res) => {
    const product = new Product({
        product_name: req.body.product_name,
        model: req.body.model,
        color: req.body.color,
        characteristic: req.body.characteristic,
        price: req.body.price
    })
    await product.save();
    res.status(201).json({ message: 'Товар создан' })
})

export default productsRouter;