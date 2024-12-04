import { Button, ButtonTheme, Text, TextSize } from '@/shared/ui';
import { HStack, VStack } from '@/shared/ui/Stack';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSclice';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { decrement, increment } = useCounterActions();

    const handleInc = () => {
        increment();
    };
    const handleDec = () => {
        decrement();
    };

    return (
        <VStack>
            <Text title={'counter'} />
            <Text size={TextSize.L} title={`${counterValue}`} data-testid="value-title" />
            <HStack>
                <Button
                    data-testid="decrement-btn"
                    onClick={handleDec}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                // eslint-disable-next-line i18next/no-literal-string
                >
                    -
                </Button>
                <Button
                    data-testid="increment-btn"
                    onClick={handleInc}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                // eslint-disable-next-line i18next/no-literal-string
                >
                    +
                </Button>
            </HStack>
        </VStack>
    );
};
