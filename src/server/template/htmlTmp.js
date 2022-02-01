import serialize from 'serialize-javascript';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { App } from '../../shared/App';



export function htmlTmp(srvdata, url) {
    const markup = ReactDOM.renderToString(
        <StaticRouter location={url}>
            <App data={srvdata} />
        </StaticRouter>
    )

    return (`
        <!DOCTYPE html>
        <html>
        <head>
            <title>SSR</title>
            <link href="/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="app">${markup}</div>
        </body>
        <script>window.__INITIAL_DATA__=${serialize(srvdata)}</script>
        <script src="/bundle.js" defer></script>
        </html>
    `)
}