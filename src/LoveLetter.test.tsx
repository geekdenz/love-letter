import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { LoveLetter, replaceLastYouWithName } from './LoveLetter';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter })

test('render LoveLetter component', () => {
    render(<LoveLetter name="Pat" />);
    const linkElement = screen.getByText(/Loading/);
    expect(linkElement).toBeInTheDocument();
});

test('render LoveLetter component', () => {
    // const wrapper = Enzyme.shallow(<LoveLetter name="Pat" />);
    // wrapper.setState({
    //     texts: ['Something you and more'],
    // });
    render(<LoveLetter name="Pat" />);
    const linkElement = screen.getByText(/Loading.../);
    expect(linkElement).toBeInTheDocument();
});

test('replace function', () => {
    const lines = [
        'something long without the word',
        'something else with you OK?',
        'another line after that',
    ];
    const expected = [
        'something long without the word',
        'something else with you, Pat OK?',
        'another line after that',
    ];
    const real = replaceLastYouWithName(lines, 'Pat');
    expect(real).toEqual(expected);
});
