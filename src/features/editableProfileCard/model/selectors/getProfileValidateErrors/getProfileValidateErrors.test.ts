import { StateSchema } from 'app/providers/StoreProvider';

import { ValidateProfileError } from '../../consts/constsEditableProfileCard';

import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
    test('should return readonly', () => {
        const validateProfileErrors: ValidateProfileError[] = [ValidateProfileError.NO_DATA, ValidateProfileError.INCORRECT_COUNTRY];
        const state: DeepPartial<StateSchema> = {profile: {validateErrors : validateProfileErrors}};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateProfileErrors);
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});