const axios = require ('../settings/axios_qa')

const userClient = {
    add: (user) => {
       return axios.post('/user', user).then()
    },
    getUserByUserName: (userName) => {
        return axios.get(`/user/${userName}`)
    }
}

module.exports = userClient