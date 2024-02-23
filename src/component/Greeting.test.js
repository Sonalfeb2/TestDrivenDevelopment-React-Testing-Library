import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting';
describe('Greeting Component',()=>{
test('render Hello World as a Text',()=>{
    render(<Greeting/>)
    const helloWorld = screen.getByText('Hello World')
    expect(helloWorld).toBeInTheDocument();
})
test('renders good to see you if button not clicked',()=>{
    render(<Greeting/>)
    const outputElement = screen.getByText('good to see you',{exact: false})
    expect(outputElement).toBeInTheDocument();
});

test('render "changed" if button is clicked',()=>{
    const buttonElement = screen.getByRole('button');

    userEvent.click(buttonElement);
    const outputElement = screen.getByText('Changed');
    expect(outputElement).toBeInTheDocument();
})
test('render not "good to see you" if button is clicked',()=>{
    const buttonElement = screen.getByRole('button',{pressed:true});

    userEvent.click(buttonElement);
    const outputElement = screen.queryByText('good to see you',{exact:'false'});
    expect(outputElement).toBeNull();
})

})