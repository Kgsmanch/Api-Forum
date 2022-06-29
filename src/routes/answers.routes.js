const express = require('express')
const app = express()
const router = express.Router();

router.get('/', (request, result) => {
    result.send('Testando send dentro do answer de fato')
});
router.get('/maisuma', (request, result) => {
    result.send('mais um teste')
});

module.exports = router;
