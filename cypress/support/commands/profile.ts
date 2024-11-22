
export const updateProfile = (firstName: string, lasrName: string) => { 
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastname').clear().type(lasrName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}; 

export const resetProfile = (profileId: string) => { 
    return cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + profileId,
        headers: {Authorization: 'auth'},
        body: {
            'id': 'usertest',
            'first': 'usertest',
            'lastname': 'usertest',
            'age': 99,
            'currency': 'BYN',
            'country': 'Belarus',
            'city': 'Brest',
            'username': 'usertest',
            'avatar': 'https://visualpharm.com/assets/381/Admin-595b40b65ba036ed117d3b23.svg',
        },
    });
}; 


declare global {
    namespace Cypress {
      interface Chainable {
        updateProfile(firstName: string, lasrName: string): Chainable<void>;
        resetProfile(profileId: string): Chainable<void>;
      }
    }
  }