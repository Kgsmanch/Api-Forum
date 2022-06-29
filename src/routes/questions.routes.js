const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (request, result) => {
    result.send('Testando send dentro do question de fato')
});

module.exports = router;
