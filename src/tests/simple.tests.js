const assert = require('assert');
const chai = require('chai');
const { expect } = require('chai');
const should = chai.should();
const HomePage = require('../po/pages/home.page.js');
const LogInPage = require('../po/pages/logIn.page.js');
const DashboardPage = require('../po/pages/dashboard.page.js');
const EditDashboardPage = require('../po/pages/editDashboard.page.js');
const BoardPage = require('../po/pages/board.page.js');

const homePage = new HomePage();
const logInPage = new LogInPage();
const dashboardPage = new DashboardPage();
const editDashboardPage = new EditDashboardPage();
const boardPage = new BoardPage();

describe('Trello Tests', () => {
  // Scenario: Sign Up for a New Trello Account
  it('Creates new account', async () =>{
    await homePage.open();
    await homePage.clickSignUpButton();
    //tbd


  })
  // Scenario: Sign In to Trello
  it('Signs In to Trello', async () => {
    await homePage.open();
    await homePage.clickLogInButton();
    await logInPage.enterUsername();
    await logInPage.clickContinueButton();
    await logInPage.enterPassword();
    await logInPage.clickContinueButton();

    await browser.pause(3000);
    const dashboardUrl = await dashboardPage.getDashboardUrl();
    console.log(dashboardUrl);
    assert(dashboardUrl.includes('boards'), 'URL does not contain word: "boards"');
  });

  // Scenario: Create a New Board
  it('Creates new Board', async () => {
    await dashboardPage.clickCreateButton();
    await dashboardPage.clickCreateNewBoardButton();
    await dashboardPage.enterNewBoardName();
    await dashboardPage.createNewBoard();

    const boardUrl = await boardPage.getBoardUrl();
    assert(boardUrl.includes('board'), 'URL should contain word: "board"');
  });

  // Scenario: Create a List on a Board
  it('Adds a new list', async () => {
    await boardPage.enterListName();
    await boardPage.clickAddNewListButton();
    await browser.pause(3000);

    expect(await boardPage.getListName()).to.equal('New List', 'New list name should match');
  });
  // Scenario: Create a Card in a List
  it('Adds a new card', async () => {
    await boardPage.clickAddNewCardButton();
    await boardPage.enterCardName();
    await boardPage.clickCreateNewCardButton();

    expect(await boardPage.getCardName()).to.equal('New Card', 'New card name should match');
  });

  //Scenario Edit Description and Workspace Name
  it('Edits Workspace details', async () => {
    await editDashboardPage.clickWorkspacesButton();
    await editDashboardPage.clickYourWorkspaceButton();
    await editDashboardPage.clickEditDashboardIcon();
    await editDashboardPage.enterDashboardName();
    await editDashboardPage.enterDashboardDescription();
    await editDashboardPage.cLickSaveDashboardButton();

    const dashboardDescription = await editDashboardPage.getDashboardDescription();
    const dashboardName = await editDashboardPage.getDashboardName();
    expect(dashboardDescription).to.equal('New Description!!!', 'Description should match');
    expect(dashboardName).to.equal('Mariusz Januszek Board', 'Name should match');
    //dashboardDescription.should.equal('New Description!!!', 'Description should match');
    //dashboardName.should.equal('Mariusz Januszek Board', 'Name should match');
  });

  it('Searches for Existing Board', async () => {
    await editDashboardPage.searchForBoard();

  });
});
