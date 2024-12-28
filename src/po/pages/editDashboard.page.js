const NavigationBarDashboard = require('../components/common/navigationBarDashboard.component.js');
const EditDashboardComponents = require('../components/editDashboard/editDashboard.component.js');
class EditDashboardPage {
  constructor() {
    this.navigationBarDashboard = new NavigationBarDashboard();
    this.editDashboardComponents = new EditDashboardComponents();
  }

  async clickEditDashboardIcon() {
    return this.editDashboardComponents.click('editdashboard').click();
  }
  async cLickSaveDashboardButton() {
    return this.editDashboardComponents.click('save').click();
  }
  async enterDashboardName() {
    return this.editDashboardComponents.edit('name').setValue('Mariusz Jansuzek Board');
  }
  async enterDashboardDescription() {
    return this.editDashboardComponents.edit('description').setValue('New Description!!!');
  }
  async clickWorkspacesButton() {
    return this.navigationBarDashboard.navigation('workspaces').click();
  }
  async clickYourWorkspaceButton() {
    return this.navigationBarDashboard.navigation('yourworkspace').click();
  }

  async getDashboardName() {
    return this.editDashboardComponents.get('dashboardname').getText();
  }
  async getDashboardDescription() {
    return this.editDashboardComponents.get('dashboarddescription').getText();
  }
  async searchForBoard() {
    return this.editDashboardComponents.edit('search').setValue('To Do List');
  }

  async getBoardName() {
    return this.editDashboardComponents.get('boardname').getText();
  }
}

module.exports = EditDashboardPage;
