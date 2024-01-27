import Page from './page.js'

class LoginPage extends Page {
    get inputUsername() {
        return $('#input-email')
    }

    get inputPassword() {
        return $('#input-password')
    }

    get clickLogin() {
        return $('input[type="submit"]')
    }

    async login(username, password) {
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.clickLogin.click()
    }

    open() {
        return super.open('account/login')
    }
}

export default new LoginPage()