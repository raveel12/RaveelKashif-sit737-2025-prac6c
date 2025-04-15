const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
    res.send('SIT737 task 6.2C');
});
 
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});