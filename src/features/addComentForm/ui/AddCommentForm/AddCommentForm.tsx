import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, Input } from '@/shared/ui';
import { HStack } from '@/shared/ui/Stack';

import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slice/addCommentFormSlice';

import cl from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
   className?: string;
   onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation('articles');

    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers} >
            <HStack gap="8" max className={classNames(cl.AddCommentForm, {}, [className])} data-testid="AddCommentForm">
                <Input 
                    onChange={onCommentTextChange}
                    value={text} 
                    className={cl.input} 
                    placeholder={t('vvedite-kommentarii')}
                    data-testId="AddCommentForm.Input"
                />
                <Button 
                    onClick={onSendHandler} 
                    className={cl.button}
                    data-testId="AddCommentForm.Button"
                >{t('otpravit')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;