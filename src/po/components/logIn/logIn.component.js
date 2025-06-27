class LogInComponents {
  textArea(textAreaName) {
    const names = {
      username: 'input[data-testid="username"]',
      password: '#password',
    };
    return $(names[textAreaName]);
  }
  button(buttonName) {
    const names = {
      continue: '#login-submit',
    };
    return $(names[buttonName]);
  }
}

module.exports = LogInComponents;
