const LogInComponents = require('./../components/logIn/logIn.component.js');
const credentials = require('../../../credencials/credencials.js');
class LogInPage {
  constructor() {
    this.logInComponents = new LogInComponents();
  }

  async open() {
    await browser.url('https://id.atlassian.com/login');
  }
  async clickContinueButton() {
    return this.logInComponents.button('continue').click();
  }
  async enterUsername() {
    const usernameInput = await this.logInComponents.textArea('username');
    await usernameInput.waitForDisplayed({ timeout: 5000 });
    return usernameInput.setValue(credentials.username);
  }
  async enterPassword() {
    const passwordInput = await this.logInComponents.textArea('password');
    await passwordInput.waitForDisplayed({ timeout: 5000 });
    return passwordInput.setValue(credentials.password);
  }
}

module.exports = LogInPage;
