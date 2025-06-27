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
    const createButton = await this.navigationBarDashboard.create('createboard');
    await createButton.waitForClickable({ timeout: 5000 });
    return createButton.click();
  }
}

module.exports = DashboardPage;
