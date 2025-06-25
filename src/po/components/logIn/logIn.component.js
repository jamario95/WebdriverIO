class LogInComponents {
  textArea(textAreaName) {
    const names = {
      username: '#username',
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
