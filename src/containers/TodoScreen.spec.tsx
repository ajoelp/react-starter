import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import TodoScreen from "./TodoScreen";

it('should type into the input and submit', () => {
    const { queryByTestId }  = render(<TodoScreen />);

    const input = queryByTestId('add-item') as HTMLInputElement;
    const button = queryByTestId('submit-item') as HTMLButtonElement;

    expect(input).toBeTruthy();
    expect(button).toBeTruthy();

    input.value = 'asdadasd';
    button.click();

    // TODO: Check redux for new items

});