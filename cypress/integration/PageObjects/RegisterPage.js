/// <reference types="Cypress" />

class RegisterPage
{

visit()
{
    cy.visit("https://demo.nopcommerce.com/")
}

registerbtn()
{
    const button=cy.get('.ico-register')
    button.click()
}

fillFirstName(value)
{
    const field=cy.get('input[id=FirstName]')  
    field.clear()
    field.type(value)
    return this  
}

fillLastName(value)
{
    const field=cy.get('input[id=LastName]')  
    field.clear()
    field.type(value)
    return this  
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

fillConfirmPassword(value)
{
    const field=cy.get('input[id=ConfirmPassword]')  
    field.clear()
    field.type(value)
    return this  
}

submit()
{
    const button=cy.get('input[id=register-button]')
    button.click()
}

logout()
{
    const button=cy.get('.ico-logout')
    button.click()
}


}
export default RegisterPage