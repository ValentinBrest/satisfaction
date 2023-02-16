import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['cl1', 'cl2'])).toBe('someClass cl1 cl2');
    });

    test('with mods', () => {
        const expected = 'someClass cl1 cl2 hovered selected';
        expect(classNames('someClass', {hovered: true, selected: true}, ['cl1', 'cl2']))
            .toBe(expected);
    });

    test('with mods false', () => {
        const expected = 'someClass cl1 cl2 scrollable';
        expect(classNames('someClass', {hovered: false, scrollable: true}, ['cl1', 'cl2']))
            .toBe(expected);
    });
});