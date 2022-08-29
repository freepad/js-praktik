//import config from '../framework/config/config';

import books from '../framework/services/bookStore.service';

describe ('Books store swagger', () => {
 
    test ('add new book to the user', async () => {
      const res = await books.addListOfBooks({userId: '4c9e5b2b-bdac-4710-8285-23aa5527b7ea', ibsn: '9781449325862'})
      expect(res.status).toEqual(201)
    })
})