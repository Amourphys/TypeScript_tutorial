import {LocalCityType} from "../02-objects/02_objects";
import {getStreetsTitlesOfGovernmentBuildings} from "./05_2_map";

let city: LocalCityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1, buildedAt: 2012, repaired: false,
                address: { number: 100, street: { title: 'White street' } }
            },
            {
                id: 2, buildedAt: 2008, repaired: false,
                address: { number: 100, street: { title: 'Happy street' } }
            },
            {
                id: 3, buildedAt: 2020, repaired: false,
                address: { number: 101, street: { title: 'Happy street' } }
            }
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizenNumber: 1000000
    }
})

test('List of streets titles of government buildings', () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})