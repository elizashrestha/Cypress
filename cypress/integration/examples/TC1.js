/// <reference types="Cypress" />

import RegisterPage from '../PageObjects/RegisterPage'

describe('MultipleRegister', function() {

    before(function() {

        cy.fixture('RegisterData').then(function(data) {
            this.data=data
        })

    })

    it('Successful Register FiveUsers', function(){
        const Rp=new RegisterPage()
        Rp.visit()

        var i=0;
        while (i < 5)
        {
            Rp.registerbtn()
            Rp.fillFirstName(this.data.FirstName[i])
            Rp.fillLastName(this.data.LastName[i])
            Rp.fillEmail(this.data.Email[i])
            Rp.fillPassword(this.data.Password[i])
            Rp.fillConfirmPassword(this.data.ConfirmPassword[i])
            Rp.submit() 
            Rp.logout()
            ++i;
        }

    })

  })