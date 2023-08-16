const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send("hello world");
})

app.get('/add/:x/:y', (req, res) => {
    let x =parseFloat(req.params.x);
    let y =parseFloat(req.params.y);

    if(isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid number, Please enter a valid number');
    }
    const result = x + y;

    res.send(`The some of ${x} and ${y} is ${result}.`)
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});