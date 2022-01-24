const user = {
    name: 'Dimych',
    age: 12,
    address: {
        city: {
            title: 'Minsk'
        }
    }
}
console.log(user.address.city.title)          //один метод получения значения
console.log(user['address']['city']['title']) //другой метод получения значения
user.address.city.title = 'Mykolaiv'          //метод для изменения значения
//user.address.city.citizensCount = 100
let users = ['Dimych', 'Natasha', 'Valera', 'Katya']
console.log(users['0'])                              //получение первого элемента
console.log(users['map']((e) => e.toUpperCase()))//перебор через map и перевод символов в верхний регистр
let userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}
userObj['0'] = 'Super Dimych'                         //меняем значение первого элемента массива
console.log(userObj[0])
//userObj['table'] = 'brown'
//userObj['Hi, how are you'] = 'I am okay'
console.log(userObj)
console.log(Object.keys(userObj))                   //получение всех ключей из объекта
console.log(Object.values(userObj))                   //получение всех значений из объекта

type Users1Type = {                                 //создание типизации для ассоциативного массива
    [key: string]: {id:number, name: string}
}

export const users1: Users1Type = {                  //ассоциативный массив
    '101': {id: 101, name: 'Egor'},
    '1': {id: 3232312, name: 'Vladimir'},
    '2': {id: 45656465, name: 'Beata'},
    '3': {id: 1, name: 'Renata'}
}
console.log(users1[1])                               //поиск по индексу ключей в ассоциативном массиве
const user1 = {id: 100500, name: 'Igor'}              //пришел объект с сервера
users1[user1.id.toString()] = user1                   //добавление объекта в ассоциативный массив
delete users1[user1.id]                               //удаление объекта

export const users2 = [                               //обычный массив
    {id: 101, name: 'Egor'},
    {id: 3232312, name: 'Vladimir'},
    {id: 45656465, name: 'Beata'},
    {id: 1, name: 'Renata'}
]
console.log(users2.find(u => u.id === 1))            //поиск по id объекта в обычном массиве при помощи метода find
users2.push(user1)                                   //мутабельное добавление объекта в обычный массив
const users2Copy = [...users2, user1]                //иммутабельное добавление объекта в обычный массив
const users2Copy1 = users2Copy.filter(u => u.id !== user1.id)//удаление объекта из обычного массива