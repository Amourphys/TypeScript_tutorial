export type StreetType = {
    title: string
}

export type AddressTypeNew = {
    number?: number
    street: StreetType
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressTypeNew
}

export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE STATION'
    budget: number
    staffCount: number
    address: AddressTypeNew
}

export type LocalCityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizenNumber: number
}

type CityType = {
    title: string
    country: string
}
type AddressType = {
    street: string
    city: CityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: 'Jurij',
    age: 32,
    isActive: true,
    address: {
        street: 'Lazurnaya',
        city: {
            title: 'Mykolaiv',
            country: 'Ukraine'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}

console.log(student.address.city.title);
console.log(student.technologies[2].title);

