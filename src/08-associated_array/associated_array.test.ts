import {users1} from "./associated_array";

type Users1Type = {                                 //создание типизации для ассоциативного массива
    [key: string]: {id:number, name: string}
}

//let users1: Users1Type

beforeEach(() => {
    let users1 = {
        '101': {id: 101, name: 'Egor'},
        '1': {id: 3232312, name: 'Vladimir'},
        '2': {id: 45656465, name: 'Beata'},
        '3': {id: 1, name: 'Renata'}
    }
})

test('should update corresponding user', () => {
    users1['1'].name = 'Vovan'
    expect(users1['1'].name).toEqual('Vovan')
})
test('should delete corresponding user', () => {
    delete users1['1']
    expect(users1['1']).toBeUndefined()
})