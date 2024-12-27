class NavigationBarHome {
  item(itemName) {
    const icons = {
      logIn: 'a.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr',
      signUp: 'a.Buttonsstyles__Button-sc-1jwidxo-0.Buttonsstyles__PrimaryButton-sc-1jwidxo-1.kTwZBr.lhSFdZ',
    };
    return $(icons[itemName]);
  }
}

module.exports = NavigationBarHome;
