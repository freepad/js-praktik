import supertest from 'supertest'

import config from '../config/config'

const {url} = config;

const books = {


    /**
   * Функция для авторизации
   *
   * @param {object} data - userId and isbn
   * @returns {object}
   *
*/

getBooksList: () => supertest(url)
    .get('BookStore/v1/Books'),   

addListOfBooks: (data) => supertest(url)
     .post('BookStore/v1/Books')
     .send(data),

getAddedBook: (data) => supertest(url)
    .get('BookStore/v1/Book')
    .send(data),

deleteAddedBook: (data) => supertest(url)
    .delete('BookStore/v1/Book')
    .send(data)
}

export default books;