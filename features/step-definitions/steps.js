import {Given, When, Then} from '@wdio/cucumber-framework';
import mainPage from '../pageobjects/mainPage.js';

let _pickuplocation;

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
  _pickuplocation = pickupLocation;
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

    case 'May12':
      await mainPage.pickupMay12.click();
      break;

    case 'May13':
      await mainPage.pickupMay13.click();
      break;

    case 'May14':
      await mainPage.pickupMay14.click();
      break;

    case 'May15':
      await mainPage.pickupMay15.click();
      break;

    case 'May16':
      await mainPage.pickupMay16.click();
      break;

    case 'May17':
      await mainPage.pickupMay17.click();
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

    case 'Jun01':
      await mainPage.pickupJun01.click();
      break;

    case 'Jun02':
      await mainPage.pickupJun02.click();
      break;

    case 'Jun03':
      await mainPage.pickupJun03.click();
      break;

    case 'Jun04':
      await mainPage.pickupJun04.click();
      break;

    case 'Jun05':
      await mainPage.pickupJun05.click();
      break;

    case 'Jun06':
      await mainPage.pickupJun06.click();
      break;

    case 'Jun07':
      await mainPage.pickupJun07.click();
      break;

    case 'Jun08':
      await mainPage.pickupJun08.click();
      break;

    case 'Jun09':
      await mainPage.pickupJun09.click();
      break;

    case 'Jun10':
      await mainPage.pickupJun10.click();
      break;

    case 'Jun11':
      await mainPage.pickupJun11.click();
      break;

    case 'Jun12':
      await mainPage.pickupJun12.click();
      break;

    case 'Jun13':
      await mainPage.pickupJun13.click();
      break;

    case 'Jun14':
      await mainPage.pickupJun14.click();
      break;

    case 'Jun15':
      await mainPage.pickupJun15.click();
      break;

    case 'Jun16':
      await mainPage.pickupJun16.click();
      break;

    case 'Jun17':
      await mainPage.pickupJun17.click();
      break;

    case 'Jun18':
      await mainPage.pickupJun18.click();
      break;
  }

  await mainPage.searchButton.click();
  console.log('City: ' + _pickuplocation + ' - Pickup: ' + pickupDate + ' - Drop off: ' + returnDate + ' - Price: ' + await mainPage.price.getText() + await mainPage.priceDecimal.getText());

});
