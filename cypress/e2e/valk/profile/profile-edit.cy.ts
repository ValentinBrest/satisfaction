let profileId = '';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(data => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'usertest');
    });
    it('и редактируем его', () => {
        const newFirstName = 'new name';
        const newLastName = 'new lastName';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName);
    });
  
});