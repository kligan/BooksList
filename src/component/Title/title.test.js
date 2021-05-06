import React from 'react';
import ReactDOM from 'react-dom';
import Title from './title';

import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it("renders without breaking", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<Title></Title>, div)
})

// Do a test by element ID
it("Check test ID", () => {
    const {getByTestId} = render(<Title title="title"></Title>)
    expect(getByTestId('title')).toHaveTextContent("title")
})