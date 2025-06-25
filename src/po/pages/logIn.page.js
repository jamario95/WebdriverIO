const LogInComponents = require('./../components/logIn/logIn.component.js');
const credentials = require('D:/WebdriverIO/credencials/credencials.js');
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
    return this.logInComponents.textArea('username').setValue(credentials.username);
  }
  async enterPassword() {
    return this.logInComponents.textArea('password').setValue(credentials.password);
  }
}

module.exports = LogInPage;
