import React from 'react';
import { render, cleanup } from '@testing-library/react'
import { queryAllByText } from '@testing-library/dom';
import TodoScreen from "./TodoScreen";


describe("TodoScreen", () => {

    let input : HTMLInputElement;
    let button : HTMLButtonElement;
    let list : HTMLDivElement;

    beforeEach(() => {

        const { queryByTestId }  = render(<TodoScreen />);
        input = queryByTestId('add-item') as HTMLInputElement;
        button = queryByTestId('submit-item') as HTMLButtonElement;
        list = queryByTestId('list') as HTMLDivElement;
    });

    afterEach(cleanup);

    it('should type into the input and submit', () => {

        expect(input).toBeTruthy();
        expect(button).toBeTruthy();
        expect(list).toBeTruthy();

        input.value = 'Hello World';
        button.click();

        expect(queryAllByText(list, 'Hello World')).toHaveLength(1);
    });

    it('should clear input on submit', () => {

        expect(input).toBeTruthy();
        expect(button).toBeTruthy();

        input.value = 'Hello World';
        button.click();

        expect(input.value).toEqual('');
    });
});

