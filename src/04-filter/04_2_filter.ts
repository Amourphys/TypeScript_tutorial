import {GovernmentBuildingType, LocalCityType} from "../02-objects/02_objects";

export function demolishHousesOnTheStreet(city: LocalCityType, street: string) {
    city.houses = city.houses.filter(h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(b => b.staffCount > number)
}