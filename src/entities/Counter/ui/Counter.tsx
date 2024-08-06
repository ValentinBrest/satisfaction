import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonTheme } from '@/shared/ui';

import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSclice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };


    return (
        <div >
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button 
                data-testid="decrement-btn" 
                onClick={decrement} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >-</Button>
            <Button 
                data-testid="increment-btn" 
                onClick={increment} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >+</Button>
        </div>
    );
};