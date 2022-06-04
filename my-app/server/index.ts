import expres from "express";
import { ROUTES } from "./routes";

// const express = require( "express" );
const app = expres();
const port = 8080; // default port to listen

ROUTES.forEach(({path, router}) => {
    app.use(path, router);
});

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );