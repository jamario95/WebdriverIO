const NavigationBarHome = require('./../components/common/navigationBarHome.component.js');
class HomePage {
  constructor() {
    this.navigationBarHome = new NavigationBarHome();
  }

  async open() {
    await browser.url('https://trello.com/home');
  }
  async clickLogInButton() {
    return this.navigationBarHome.item('logIn').click();
  }
  async clickSignUpButton() {
    return this.navigationBarHome.item('signUp').click();
  }
}

module.exports = HomePage;
