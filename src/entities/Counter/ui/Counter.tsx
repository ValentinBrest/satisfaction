import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { Button, ButtonTheme } from 'shared/ui';

import { CounterActions } from '../model/slice/counterSclice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };


    return (
        <div >
            <h1>{counterValue}</h1>
            <Button onClick={decrement} theme={ButtonTheme.BACKGROUND_INVERTED}>-</Button>
            <Button onClick={increment} theme={ButtonTheme.BACKGROUND_INVERTED}>+</Button>
        </div>
    );
};