class NavigationBarDashboard {
  navigation(navigationName) {
    const buttons = {
      create: 'div.rCD_pjrvLRI_B_ > button',
      createboard: 'li > button.gJDsPins_eYkBM',
      workspaces: 'button.mWC2xT8NP_mW2g.frrHNIWnTojsww.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc',
      yourworkspace: 'a.TaNgu9ncpvX1uL',
    };
    return $(buttons[navigationName]);
  }

  create(createName) {
    const options = {
      title: 'label.fMvxkh4DHKJGnq > input.nch-textfield__input',
      createboard: 'button[data-testid="create-board-submit-button"]',
    };
    return $(options[createName]);
  }
}

module.exports = NavigationBarDashboard;
