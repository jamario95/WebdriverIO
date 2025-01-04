const credentials = require('D:/WebdriverIO/credencials/credencials.js');
const chai = require('chai');
const { expect, should, assert } = require('chai');
chai.should();

describe('Trello Tests', () => {
  // Scenario: Sign Up for a New Trello Account
  it('Creates new account', async () => {
    await browser.url('https://trello.com/home');
    const registerButton = await $(
      'a.Buttonsstyles__Button-sc-1jwidxo-0.Buttonsstyles__PrimaryButton-sc-1jwidxo-1.kTwZBr.lhSFdZ'
    );
    await registerButton.click();
  });
  // Scenario: Sign In to Trello
  it('Sign In to Trello', async () => {
    await browser.url('https://trello.com/home');
    const loginButton = await $('a.Buttonsstyles__Button-sc-1jwidxo-0.kTwZBr');
    await loginButton.click();
    const emailField = await $('#username');
    await emailField.setValue(credentials.username);
    const continueButton = await $('#login-submit');
    await continueButton.click();
    const passwordField = await $('#password');
    await passwordField.setValue(credentials.password);
    await continueButton.click();
    await browser.pause(1000);
    const dashboardUrl = await browser.getUrl();
    assert(dashboardUrl.includes('boards'), 'URL does not contain word: "boards"');
  });

  // Scenario: Create a New Board
  it('Create new Board', async () => {
    const createNew = await $('div.rCD_pjrvLRI_B_ > button');
    await createNew.click();
    const createNewBoard = await $('li > button.gJDsPins_eYkBM');
    await createNewBoard.click();
    const boardName = await $('label.fMvxkh4DHKJGnq > input.nch-textfield__input');
    await boardName.setValue('New Board');
    const createButton = await $('form > button.ijFumaLuInvBrL');
    await createButton.click();

    await browser.pause(1000);
    const boardUrl = await browser.getUrl();
    assert(boardUrl.includes('board'), 'URL should contain word: "board"');
  });

  // Scenario: Create a List on a Board
  it('Adds a new list', async () => {
    const listName = await $('textarea.oe8RymzptORQ7h');
    await listName.setValue('New List');
    const confirmNewList = await $('button[data-testid="list-composer-add-list-button"]');
    await confirmNewList.click();

    const listNameField = await $('h2.KLvU2mDGTQrsWG');
    expect(await listNameField.getText()).to.equal('New List', 'New list name should match');
  });
  // Scenario: Create a Card in a List
  it('Adds a new card', async () => {
    const createCard = await $('button[data-testid="list-add-card-button"]');
    await createCard.click();
    const cardName = await $('textarea[data-testid="list-card-composer-textarea"]');
    await cardName.setValue('New Card');
    const confirmNewCard = await $('button[data-testid="list-card-composer-add-card-button"]');
    await confirmNewCard.click();

    const CardNameField = await $('a[data-testid="card-name"]');
    expect(await CardNameField.getText()).to.equal('New Card', 'New card name should match');
  });

  //Scenario Edit Description and Workspace Name
  it('Edits Workspace details', async () => {
    const workspacesButton = await $('button.mWC2xT8NP_mW2g.frrHNIWnTojsww.bxgKMAm3lq5BpA.SEj5vUdI3VvxDc');
    await workspacesButton.click();
    const workspaceName = await $('a.TaNgu9ncpvX1uL');
    await workspaceName.click();
    const editWorkspace = await $('.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc');
    await editWorkspace.click();
    const editWorkspaceName = await $('input#displayName');
    await editWorkspaceName.setValue('Mariusz Januszek Board'); //
    const editWorkspaceDescription = await $('textarea#desc');
    await editWorkspaceDescription.setValue('New Description!!!');
    const saveWorkspaceChanges = await $('button._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc');
    await saveWorkspaceChanges.click();

    const dashboardDescription = await $('.ak-renderer-document > p').getText();
    const dashboardName = await $('h2.SiP6d2d_8FAAkC').getText();
    dashboardDescription.should.equal('New Description!!!', 'Description should match');
    dashboardName.should.equal('Mariusz Januszek Board', 'Name should match');
  });

  it('Searches for Existing Board', async () => {
    const searchBar = await $('#search');
    await searchBar.setValue('New Board');
  });
});
