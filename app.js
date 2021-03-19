const express = require('express');
const app = express();
const path = require('path');
// const path = require('../build/index.html');
const port = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server is up on portsss ${port}!`);
});