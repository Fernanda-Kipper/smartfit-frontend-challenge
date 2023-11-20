import { locationMock } from "./location.mock";

export const GetUnitServiceMock = {
    getAllUnits: jest.fn(),
    getFilteredUnits: jest.fn().mockReturnValue([locationMock]),
    setFilteredUnits: jest.fn()
}