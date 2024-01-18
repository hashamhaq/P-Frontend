const express = require('express');
const app = express();
const port = 5002;

app.get('/', (req, res) => res.send('Frontend file response'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
