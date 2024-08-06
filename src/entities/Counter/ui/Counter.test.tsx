import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from '@/shared/lib/tests/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
    test('test Counter render', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {value: 10},
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
       
    });

    test('decrement', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {value: 10},
            },
        });
        const toggleBtn = screen.getByTestId('decrement-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
    test('increment', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {value: 10},
            },
        });
        const toggleBtn = screen.getByTestId('increment-btn');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
});