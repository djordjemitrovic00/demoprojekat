import {render, screen} from '@testing-library/react'
import {StarWarsApi} from './StarWarsApi'
import '@testing-library/jest-dom'
import { StarWarsContext, StarWarsProvider } from '../Context/StarWarsContext'
jest.mock('react-router-dom', () => ({
    useHistory: jest.fn(),
    useRouteMatch: jest.fn()
}))
const peopleList = [
    {
        name: "Jedan",
        gender: "male",
        height: 187
    },
    {
        name: "Drugi",
        gender: "female",
        height: 190
    }
]
test("Test render context", async () => {
    render(<StarWarsContext.Provider value={{
        people: peopleList,
        addPeople: jest.fn()
        }}> <StarWarsApi /> </StarWarsContext.Provider> );


    const outputElement = await screen.findAllByRole("listitem");
    expect(outputElement).not.toHaveLength(0)
})