import express from 'express';
import cors from 'cors';
import config from 'config';
import fetch from 'isomorphic-fetch';
import { matchPath } from 'react-router-dom';
import productsRouter from './routes/api/products.routes';
import { htmlTmp } from './template/htmltmp.js';
import routes from './routes/visible/routes';


const mongoose = require('mongoose');
const PORT = config.get('port') || 5000;
const DBHOST = config.get('db.host');
const DBPORT = config.get('db.port');
const DB = config.get('db.name');
const DBURL = `mongodb://${DBHOST}:${DBPORT}/${DB}`;

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(express.json({ extended: true }))

app.use(productsRouter)


app.get("*", (req, res, next) => {

    const activeRoute = routes.find((target) => matchPath(target.path, req.url)) || {};
    let url;
    let productOne = req.url

    switch (activeRoute.path) {
        case '/products':
            url = `http://localhost:3000/api/products/all`;
            fetch(url)
                .then(resp => resp.text())
                .then(data => {
                    const srvdata = JSON.parse(data);
                    res.send(htmlTmp(srvdata, req.url))
                }).catch(next)
            break;
        case '/product/:id':
            url = `http://localhost:3000/api${productOne}`;
            fetch(url)
                .then(resp => resp.text())
                .then(data => {
                    const srvdata = JSON.parse(data);
                    res.send(htmlTmp(srvdata, req.url))
                }).catch(next)
            break;
        default:
            const srvdata = null;
            res.send(htmlTmp(srvdata, req.url))
            next()
            break;
    }
})

async function start() {
    try {
        try {
            await mongoose.connect(DBURL, {
                useNewUrlParser: true
            })
            app.listen(PORT, () => { console.log('Started on port:', PORT) })
        } catch (e) {
            console.log("Db err");
            process.exit(1);
        }
    } catch (e) {
        console.log("Server err");
        process.exit(1);
    }
}

const db = mongoose.connection;
db.once('open', _ => {
    console.log('Db connected:', DBURL)
})

start();
