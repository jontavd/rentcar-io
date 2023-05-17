import {Given, Then, When} from '@wdio/cucumber-framework';
import csv from 'fast-csv';
import fs from 'fs';
import mainPage from '../pageobjects/mainPage.js';

let _pickuplocation, _pickupDate, _returnDate, _dateCombinations, _cities;

let cSearchDate, cPickupDay, cPickupWeekDay, cReturnDay, cReturnWeekDay, cDaysInAdvance, cDaysInBetween, cWeekend, cCity, cPrice;

Given(/^I am on the main pages$/, async function () {
  // await browser.reloadSession();
  // await mainPage.open();
});

Then(/^I wait (\d+) seconds$/, async function (seconds) {
  await browser.pause(seconds * 1000);
});

Given(/^I prepare the calendar dates for the test$/, async function () {
  const today = new Date();
  const firstPickupDate = new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000);
  const minRentDuration = 7 * 24 * 60 * 60 * 1000;
  const maxRentDuration = 28 * 24 * 60 * 60 * 1000;

  const lastDayOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);

  const dateCombinations = [];

  let currentPickupDate = firstPickupDate;
  while (true) {
    let currentDropoffDate = new Date(currentPickupDate.getTime() + minRentDuration);
    while (currentDropoffDate <= new Date(currentPickupDate.getTime() + maxRentDuration) && currentDropoffDate <= lastDayOfNextMonth) {
      dateCombinations.push([currentPickupDate, currentDropoffDate]);
      currentDropoffDate = new Date(currentDropoffDate.getTime() + 24 * 60 * 60 * 1000);
    }

    currentPickupDate = new Date(currentPickupDate.getTime() + 24 * 60 * 60 * 1000);
    if (new Date(currentPickupDate.getTime() + minRentDuration) > lastDayOfNextMonth) {
      break;
    }
  }
  _dateCombinations = dateCombinations;
});
Given(/^I select the cities for pickup location$/, async function () {
  _cities = ["Lisboa", "Porto"];
});

Given(/^I search the using the prepared data$/, async function () {
  fs.writeFile('output.csv', '', err => {
    if(err) {
      console.log('Error creating/replacing file:', err);
    }
  });

  let locale = 'en-GB';

  const csvStream = csv.format({headers: true, delimiter: ';'});
  const writableStream = fs.createWriteStream('output.csv', {flags: 'a'});
  csvStream.pipe(writableStream);

  cSearchDate = new Date();
  let formattedCSearchDate = cSearchDate.toLocaleDateString(locale, { month: 'long', day: 'numeric' });

  for (const city of _cities) {
    for (const dateCombination of _dateCombinations) {

      await browser.reloadSession();
      await mainPage.open();
      await mainPage.acceptCookies();
      await mainPage.fillPickupPlace(city);

      await mainPage.fillPickupDate(dateCombination[0]);
      await mainPage.fillDropoffDate(dateCombination[1]);

      await mainPage.searchButton.click();

      const price = await mainPage.price.getText() + await mainPage.priceDecimal.getText();

      cCity = city;
      cPickupDay = dateCombination[0].getDate();
      let formattedCPickupDate = dateCombination[0].toLocaleDateString(locale, { month: 'long', day: 'numeric' });
      cPickupWeekDay = dateCombination[0].getDay();
      let formattedCPickupWeekDay = dateCombination[0].toLocaleDateString(locale, { weekday: 'long' });
      cReturnDay = dateCombination[1].getDate();
      let formattedCReturnDate = dateCombination[1].toLocaleDateString(locale, { month: 'long', day: 'numeric' });
      cReturnWeekDay = dateCombination[1].getDay();
      let formattedCReturnWeekDay = dateCombination[1].toLocaleDateString(locale, { weekday: 'long' });
      cDaysInAdvance = Math.round((dateCombination[0].getTime() - cSearchDate.getTime()) / (1000 * 3600 * 24));
      cDaysInBetween = Math.round((dateCombination[1].getTime() - dateCombination[0].getTime()) / (1000 * 3600 * 24));
      cPrice = price;

      csvStream.write({
        formattedCSearchDate: formattedCSearchDate,
        cCity: cCity,
        formattedCPickupDate: formattedCPickupDate,
        formattedCPickupWeekDay: formattedCPickupWeekDay,
        formattedCReturnDate: formattedCReturnDate,
        formattedCReturnWeekDay: formattedCReturnWeekDay,
        cDaysInAdvance: cDaysInAdvance,
        cDaysInBetween: cDaysInBetween,
        cPrice: cPrice
      });

      console.log('INFO: ' + cCity + ' - ' + formattedCPickupDate + ' - ' + formattedCReturnDate + ' - ' + cPrice);
    }
  }
  csvStream.end();
});

Given(/^I search the city with (.*) and (.*) data$/, async function (pickupDate, returnDate) {
  const cities = ["Lisboa", "Porto"];
  const locale = 'en-GB';
  const searchDate = new Date().toLocaleDateString(locale, { month: 'long', day: 'numeric' });
  const searchHour = new Date().getHours().toString().padStart(2, '0');
  const csvPickupDate = new Date(pickupDate).toLocaleDateString(locale, { month: 'long', day: 'numeric' });
  const csvPickupWeekDay = new Date(pickupDate).toLocaleDateString(locale, { weekday: 'long' });
  const csvReturnDate = new Date(returnDate).toLocaleDateString(locale, { month: 'long', day: 'numeric' });
  const csvReturnWeekDay = new Date(returnDate).toLocaleDateString(locale, { weekday: 'long' });
  const csvDaysInAdvance = Math.round((new Date(pickupDate).getTime() - new Date().getTime()) / (1000 * 3600 * 24));
  const csvDaysInBetween = Math.round((new Date(returnDate).getTime() - new Date(pickupDate).getTime()) / (1000 * 3600 * 24));

  for (const city of cities) {
    const csvStream = csv.format({headers: false, delimiter: ';'});
    const writableStream = fs.createWriteStream("output/specific-dates.csv", {flags: 'a'});
    csvStream.pipe(writableStream);

    await browser.reloadSession();
    await mainPage.open();
    await mainPage.acceptCookies();
    await mainPage.fillPickupPlace(city);
    await mainPage.fillPickupDate(new Date(pickupDate));
    if (new Date(pickupDate).getMonth() > new Date().getMonth()) {
      await mainPage.fillDropoffDate(new Date(returnDate), 'left');
    } else {
      await mainPage.fillDropoffDate(new Date(returnDate));
    }
    await mainPage.searchButton.click();
    const price = await mainPage.price.getText() + await mainPage.priceDecimal.getText();

    csvStream.write({
      searchDate: searchDate,
      searchHour: searchHour,
      city: city,
      pickupDate: csvPickupDate,
      pickupWeekDay: csvPickupWeekDay,
      returnDate: csvReturnDate,
      returnWeekDay: csvReturnWeekDay,
      daysInAdvance: csvDaysInAdvance,
      daysInBetween: csvDaysInBetween,
      price: price
    });
    writableStream.write('\n');
    csvStream.end();
    console.log('INFO: ' + city + ' - ' + pickupDate + ' - ' + returnDate + ' - ' + price);
  }

});
