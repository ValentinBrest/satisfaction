describe('Пользователь заходит на страницу статей', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('и проверяем что статьи прогрузились', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });

    it('На стабах (фикстурах)', () => {
        cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });

    it.skip('Пример заскипанного теста', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
        cy.get('asfasf').should('exist');
    });
});