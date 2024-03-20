import Page from './page.js'

class RegisterPage extends Page {
    get firstName() {
        return $('#input-firstname')
    }

    get lastName() {
        return $('#input-lastname')
    }

    get email() {
        return $('#input-email')
    }

    get phone() {
        return $('#input-telephone')
    }

    get password() {
        return $('#input-password')
    }

    get passwordConfirm() {
        return $('#input-confirm')
    }

    get continueBtn() {
        return $('input[value="Continue"]')
    }

    get errorMsg() {
        return $('.text-danger')
    }

    async register(firstName, lastName, email, phone, password, confirmPassword) {
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.email.setValue(email)
        await this.phone.setValue(phone)
        await this.password.setValue(password)
        await this.passwordConfirm.setValue(confirmPassword)
        await this.continueBtn.click()
    }

    open() {
        return super.open('account/register')
    }

    getErrorMessage() {
        return this.errorMsg.getText();
    }
}

export default new RegisterPage()