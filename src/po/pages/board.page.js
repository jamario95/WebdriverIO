const BoardComponents = require('../components/board/board.component.js');
class BoardPage {
  constructor() {
    this.boardComponents = new BoardComponents();
  }
  async getBoardUrl() {
    return browser.getUrl();
  }
  async enterListName() {
    return this.boardComponents.textArea('listname').setValue('New List');
  }
  async clickAddNewListButton() {
    return this.boardComponents.button('createlist').click();
  }
  async getListName() {
    const listNameElem = await this.boardComponents.get('listname');
    await listNameElem.waitForDisplayed({ timeout: 5000 });
    return listNameElem.getValue();
  }
  async getCardName() {
    return this.boardComponents.get('cardname').getText();
  }
  async clickAddNewCardButton() {
    return this.boardComponents.button('addcard').click();
  }
  async enterCardName() {
    return this.boardComponents.textArea('cardname').setValue('New Card');
  }
  async clickCreateNewCardButton() {
    return this.boardComponents.button('createcard').click();
  }
}

module.exports = BoardPage;
