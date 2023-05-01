import {Given, When, Then} from '@wdio/cucumber-framework';
import mainPage from '../pageobjects/mainPage.js';

Given(/^I am on the main pages$/, async function() {
  await browser.reloadSession();
  await mainPage.open();
});

Then(/^I wait (\d+) seconds$/, async function(seconds) {
  await browser.pause(seconds * 1000);
});

When(/^I fill the form with the rent details$/, async function() {
  await mainPage.pickupMay02.click();
  await browser.pause(1000);
  await mainPage.pickupMay16.click();
  await mainPage.searchButton.click();
  console.log('May02-May16 - Price: ' + await mainPage.price.getText() + await mainPage.priceDecimal.getText());
});

When(/^I fill the form with the second rent details$/, async function() {
  await mainPage.pickupMay03.click();
  await browser.pause(1000);
  await mainPage.pickupMay17.click();
  await mainPage.searchButton.click();
  console.log('May03-May17 - Price: ' + await mainPage.price.getText() + await mainPage.priceDecimal.getText());
});

Given(/^I select (.*)> as the pickup location$/, async function(pickupLocation) {
  await mainPage.acceptCookiesButton.click();
  await mainPage.pickupPlace.setValue(pickupLocation);
  await mainPage.pickupPlaceList.click();
});

When(/^I fill the (.*) and I fill the (.*)$/, async function(pickupDate, returnDate) {

  switch (pickupDate) {
    case 'May02':
      await mainPage.pickupMay02.click();
      break;

    case 'May03':
      await mainPage.pickupMay03.click();
      break;

    case 'May04':
      await mainPage.pickupMay04.click();
      break;

    case 'May05':
      await mainPage.pickupMay05.click();
      break;

    case 'May06':
      await mainPage.pickupMay06.click();
      break;

    case 'May07':
      await mainPage.pickupMay07.click();
      break;

    case 'May08':
      await mainPage.pickupMay08.click();
      break;

    case 'May09':
      await mainPage.pickupMay09.click();
      break;

    case 'May10':
      await mainPage.pickupMay10.click();
      break;

    case 'May11':
      await mainPage.pickupMay11.click();
      break;
  }

  await browser.pause(1000);

  switch (returnDate) {
    case 'May16':
      await mainPage.pickupMay16.click();
      break;

    case 'May17':
      await mainPage.pickupMay16.click();
      break;

    case 'May18':
      await mainPage.pickupMay18.click();
      break;

    case 'May19':
      await mainPage.pickupMay19.click();
      break;

    case 'May20':
      await mainPage.pickupMay20.click();
      break;

    case 'May21':
      await mainPage.pickupMay21.click();
      break;

    case 'May22':
      await mainPage.pickupMay22.click();
      break;

    case 'May23':
      await mainPage.pickupMay23.click();
      break;

    case 'May24':
      await mainPage.pickupMay24.click();
      break;

    case 'May25':
      await mainPage.pickupMay25.click();
      break;

    case 'May26':
      await mainPage.pickupMay26.click();
      break;

    case 'May27':
      await mainPage.pickupMay27.click();
      break;

    case 'May28':
      await mainPage.pickupMay28.click();
      break;

    case 'May29':
      await mainPage.pickupMay29.click();
      break;

    case 'May30':
      await mainPage.pickupMay30.click();
      break;

    case 'May31':
      await mainPage.pickupMay31.click();
      break;
  }

  await mainPage.searchButton.click();
  console.log('Pickup: ' + pickupDate + ' Drop off: ' + returnDate + ' - Price: ' + await mainPage.price.getText() + await mainPage.priceDecimal.getText());

});
