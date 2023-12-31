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

    res.send(`The sum of ${x} and ${y} is ${result}.`)
});

app.get('/subtract/:x/:y', (req, res) => {
    let x =parseFloat(req.params.x);
    let y =parseFloat(req.params.y);

    if(isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid number, Please enter a valid number');
    }
    let result = x - y;

    res.send(`The difference of ${x} and ${y} is ${result}.`)
});

app.get('/multiply/:x/:y', (req, res) => {
    let x =parseFloat(req.params.x);
    let y =parseFloat(req.params.y);

    if(isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid number, Please enter a valid number');
    }
    let result = x * y;

    res.send(`The multiplication of ${x} and ${y} is ${result}.`)
});

app.get('/divide/:x/:y', (req, res) => {
    let x =parseFloat(req.params.x);
    let y =parseFloat(req.params.y);

    if(isNaN(x) || isNaN(y)) {
        return res.status(400).send('Invalid number, Please enter a valid number');
    }
    let result = x / y;

    res.send(`The division of ${x} and ${y} is ${result}.`)
});


app.get('/:nums', (req,res) => {
    let nums = req.params.nums.split('/')
    let mathOperation = req.query.math;

    if (!mathOperation || !['add', 'subtract', 'multiply', 'divide'].includes(mathOperation)) {
        return res.status(400).send('Invalid number or operation, please try again');
    }

    
})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});