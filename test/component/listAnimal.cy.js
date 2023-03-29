import React from 'react'
import ListAnimal from '@/pages/animal/list'

describe('<ListAnimal />', () => {
  it('renders', () => {
    cy.mount(<ListAnimal />)
  })
    it('Gender is displayed correctly', () => {
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=female-icon]')
      .should('be.visible');

    cy.get('[data-testid="Manchas-container"]')
      .get('[name=male-icon]')
      .should('not.exist');
  })
  
  it('Gender is displayed correctly', () => {
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=female-icon]')
      .should('be.visible');

    cy.get('[data-testid="Manchas-container"]')
      .get('[name=male-icon]')
      .should('not.exist');
  })

  it('Vaccinated icon is displayed correctly', () => {
    cy.mount(<ListAnimal />)
  
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=health-icon]')
      .should('be.visible');
  
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=unhealthy-icon]')
      .should('not.exist');
  })   

  it('Animal data is displayed correctly', () => {
    cy.mount(<ListAnimal />)
  
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=name-cat]')
      .should('be.visible');
  
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=breed-cat]')
      .should('be.visible');
    
    cy.get('[data-testid="Manchas-container"]')
      .get('[name=vaccines-list-cat]')
      .should('be.visible');  
  })
})

beforeEach(() => {
    cy.intercept(
       'GET',
       '/animals',
       [
          {
             "name":"Manchas",
             "breed":"Bengali",
             "gender":"Female",
             "isVaccinated":true,
             "vaccines": ["rabia","leucemia","parvovirus"]
          }
       ]
    );

 });

 
