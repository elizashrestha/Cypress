/// <reference types="Cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('MultipleLogins', function () {

        before(function () {
            cy.fixture('RegisterData').then(function (data) {
                this.data = data

            })

        })

        it('Successfull Login FiveUsers', function () {
            const lp = new LoginPage()
            lp.visit()

            var i=0;
            while (i < 5)
            {
                lp.loginbtn()
                lp.fillEmail(this.data.Email[i])
                lp.fillPassword(this.data.Password[i])
                lp.submit()
                lp.logout()
                ++i;
            }    
                   
        })

    })