/// <reference types="Cypress" />

class LoginPage
{

visit()
{
    cy.visit("https://demo.nopcommerce.com/")
}

loginbtn()
{
    const button=cy.get('.ico-login')
    button.click()
}

fillEmail(value)
{
    const field=cy.get('input[id=Email]')  
    field.clear()
    field.type(value)
    return this  
}

fillPassword(value)
{
    const field=cy.get('input[id=Password]')  
    field.clear()
    field.type(value)
    return this  
}

submit()
{
    const button=cy.get('.login-button')
    button.click()
}

logout()
{
    const button=cy.get('.ico-logout')
    button.click()
}


}
export default LoginPage