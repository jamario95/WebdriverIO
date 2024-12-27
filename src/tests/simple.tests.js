const assert = require('assert');
const { expect } = require('chai');
const chai = require('chai');
const HomePage = require('../po/pages/home.page.js');
const LogInPage = require('../po/pages/logIn.page.js');

const homePage = new HomePage();
const logInPage = new LogInPage();

describe('Trello Tests', () => {
  // Scenario: Sign Up for a New Trello Account
  // Scenario: Sign In to Trello
  it('Sign In to Trello', async () => {
    await homePage.open();

    await homePage.clickLogInButton();

    await logInPage.enterUsername();

    await logInPage.clickContinueButton();

    await logInPage.enterPassword();

    await logInPage.clickContinueButton();

    await browser.pause(2000);
    const currentUrl = await browser.getUrl();
    assert(currentUrl.includes('boards'), 'URL does not contain word: "boards"');
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

    const currentUrl = await browser.getUrl();
    currentUrl.should.include('board', 'URL should contain word: "board"');
  });

  // Scenario: Create a List on a Board (it doesnt work)
  it('Adds a new list', async () => {
    const addList = await $('.WC6fBZ3Z4IYlvP > button.CSwccJ0PrMROzz');
    await addList.click();
    const listName = await $('textarea.oe8RymzptORQ7h');
    await listName.setValue('New List');
    const confirmNewList = await $('button.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc');
    await confirmNewList.click();
    const newListName = await $('h2.KLvU2mDGTQrsWG').getText();
    expect(newListName).to.equal('New List', 'New list name should match');
  });
  // Scenario: Create a Card in a List it is continuation of crating board so I still cant make it

  //Scenario Edit Description and Workspace Name
  it('Edits Workspace details', async () => {
    const workspaceName = await $('.xCguOZ9cqq39GJ');
    await workspaceName.click();
    const editWorkspace = await $('.Ch1Opdvr77xkJp.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.SEj5vUdI3VvxDc');
    await editWorkspace.click();
    const editWorkspaceName = await $('input#displayName');
    await editWorkspaceName.setValue('Random Name Board'); //
    const editWorkspaceDescription = await $('textarea#desc');
    await editWorkspaceDescription.setValue('New Description!!!');
    const saveWorkspaceChanges = await $('button._wJD3QSFJjW4Pb.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.SEj5vUdI3VvxDc');
    await saveWorkspaceChanges.click();

    const workspaceDescription = await $('.ak-renderer-document > p').getText();
    workspaceDescription.should.equal('New Description!!!', 'Description should match');
  });

  it('Searches for Existing Board', async () => {
    const searchBar = await $('#search');
    await searchBar.setValue('To Do List');

    const section = await $('section.hl2XIttzg_LUv_');
    const boardLink = await section.$('ul.L0brLYR3ZZ6wm4 li a');
    await boardLink.waitForExist();
    const boardName = await boardLink.getText();
    expect(boardName).to.equal('New Board', 'Board with name "New Board" not found');
  });
});