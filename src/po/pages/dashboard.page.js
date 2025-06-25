const NavigationBarDashboard = require('./../components/common/navigationBarDashboard.component.js');
class DashboardPage {
  constructor() {
    this.navigationBarDashboard = new NavigationBarDashboard();
  }

  async open() {
    await browser.url('https://trello.com/');
  }
  async getDashboardUrl() {
    return browser.getUrl();
  }

  async clickCreateButton() {
    return this.navigationBarDashboard.navigation('create').click();
  }
  async clickCreateNewBoardButton() {
    return this.navigationBarDashboard.navigation('createboard').click();
  }
  async enterNewBoardName() {
    return this.navigationBarDashboard.create('title').setValue('New Board');
  }
  async createNewBoard() {
    return this.navigationBarDashboard.create('createboard').click();
  }
}

module.exports = DashboardPage;
