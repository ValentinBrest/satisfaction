import { Button, ButtonTheme } from '@/shared/ui';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSclice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const {decrement, increment} = useCounterActions();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };


    return (
        <div >
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button 
                data-testid="decrement-btn" 
                onClick={handleDec} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >-</Button>
            <Button 
                data-testid="increment-btn" 
                onClick={handleInc} 
                theme={ButtonTheme.BACKGROUND_INVERTED}
            >+</Button>
        </div>
    );
};