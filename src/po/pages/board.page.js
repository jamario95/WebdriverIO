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
    return this.boardComponents.get('listname').getText();
  }
  async clickAddNewCardButton() {
     return this.boardComponents.button('addcard').click();
  }
  async enterCardName(){
    return this.boardComponents.textArea('cardname').setValue('New List')
  }
  async clickCreateNewCardButton() {
    return this.boardComponents.button('createcard').click();
  }
}

module.exports = BoardPage;
