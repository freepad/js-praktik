const axios = require('axios').default;

const axios_qa = axios.create ({
    baseURL: 'https://petstore.swagger.io/', //добавим базовый урл, чтобы его использовать
    headers: {
        'Authorization': '52fce731-e526-433f-8d0d-7bbca90b6b55'
    }
})

module.exports = axios_qa