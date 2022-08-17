//функция которая удаляет у объtкта рандомный id и  возвращает остальные свойства объекта
const removeFn = (id, {[id]: deletedValue, ...other}) => other

module.exports = { removeFn } // функцию мы экспортируем в {}