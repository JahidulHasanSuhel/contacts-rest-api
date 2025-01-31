import express from 'express';
import morgan from 'morgan';

import {router} from './route.js';

const app = express();

app.use(morgan('dev'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('<h1>Root Route</h1>')
// })
app.use("/contacts", router);
//default route
app.get('*', (req, res) => {
    res.send('<h1>Please use the correct routes</h1>')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})