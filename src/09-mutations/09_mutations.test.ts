type UserType ={
    name: string
    age: number
    address: {title: string}
}
function increaseAge(u: UserType) {
    u.age++;
}

test('reference type test', () => {
    const user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000);
})

test('reference array test', () => {
    let users = [
        {name: 'Kosha', age: 24},
        {name: 'Zema', age: 25}
    ]

    let admins = users;
    admins.push({name: 'Bandiugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandiugan', age: 10})
})

test('value type test', () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;
    adminsCount++;
})

test('reference type test', () => {
    const user = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }
    
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }

    user2.address.title = 'Kanary';

    expect(user.address).toBe(user2.address);
    expect(user.address.title).toBe('Kanary');
})

test('reference array type test', () => {
    const address = {
        title: 'Minsk'
    }
    const user = {
        name: 'Dimych',
        age: 32,
        address: address
    }
    
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Misha', age: 4, address: address}];
    const admins = [user, user2];
    admins[0].name = 'Dmitry';

    expect(users[0].name).toBe('Dmitry');
    expect(user.name).toBe('Dmitry');
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];
    letters.sort();
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z']);
})