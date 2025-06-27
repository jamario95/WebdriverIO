class BoardComponents {
  textArea(textAreaName) {
    const names = {
      listname: 'textarea.oe8RymzptORQ7h',
      cardname: 'textarea[data-testid="list-card-composer-textarea"]',
    };
    return $(names[textAreaName]);
  }
  button(buttonName) {
    const names = {
      createlist: 'button[data-testid="list-composer-add-list-button"]',
      addcard: 'button[data-testid="list-add-card-button"]',
      createcard: 'button[data-testid="list-card-composer-add-card-button"]',
    };
    return $(names[buttonName]);
  }
  get(getName) {
    const elements = {
      listname: '[data-testid="list-name"] span',
      cardname: 'a[data-testid="card-name"]',
    };
    return $(elements[getName]);
  }
}

module.exports = BoardComponents;
