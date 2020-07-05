const express = require('express');
const port = process.env.PORT || 8000;
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);

const router = express.Router();
app.use(express.static(path.join(__dirname, '/')));
app.use('/', router); 
router.get('/', async (req, res) => {
    res.sendFile(path.join('index.html'));
});



server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

