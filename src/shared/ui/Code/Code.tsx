import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/article/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Button, ButtonTheme } from '../Button/Button';

import cl from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const {
        className, 
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cl.Code, {}, [className])}>
            <Button onClick={onCopy} className={cl.copyBtn} theme={ButtonTheme.CLEAR}>
                {<CopyIcon/>}
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});