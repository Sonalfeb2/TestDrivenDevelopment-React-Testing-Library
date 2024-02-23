import {render, screen} from '@testing-library/react';
import Async from './Async';
describe('Async Component',()=>{

    test('renders posts if request succeed',async ()=>{
        window.fetch = jest.fn() //created dummy fetch function
        window.fetch.mockResolvedValueOnce({
            json: async () =>[{id:'p1',title:'dummy Post'}]
        }); //this is for the server if we are getting some error by server or network down it will show
        render(<Async/>)
        const listItemElement = await screen.findAllByRole('listitem');
        expect(listItemElement).not.toHaveLength(0);
    })
})