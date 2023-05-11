import {getDateSelector} from "../utils/helpers.js";

class MainPage {
  open () {
    return browser.url("https://goldcar.es/");
  }

  get acceptCookiesButton () {
    return $("#didomi-notice-agree-button > span");
  }

  get pickupPlace () {
    return $(".pickupplace");
  }

  get pickupPlaceList () {
    return $(".nombre-oficina");
  }

  get pickupDate () {
    return $("#pickupdate");
  }

  get pickupTime () {
    return $('#pickuptime');
  }

  get pickupTime12 () {
    return $('#hora_25')
  }

  get dropoffDate () {
    return $("#dropoffdate");
  }
  get dropoffTime () {
      return $('#dropofftime');
  }

  get dropoffTime12 () {
    return $('#hora_25')
  }

  get searchButton () {
    return $(".seccion-buscar > span:nth-child(2)");
  }

  get price () {
    return $("#AA-tarifas-4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span:nth-child(2) > b:nth-child(1)");
  }

  get priceDecimal () {
    return $("#AA-tarifas-4 > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > span:nth-child(3) > b:nth-child(1)");
  }

  async fillPickupPlace (city) {
    await this.pickupPlace.waitForDisplayed();
    await this.pickupPlace.setValue(city);
    await this.pickupPlaceList.waitForDisplayed();
    await this.pickupPlaceList.click();
    await this.pickupPlace.click();
  }

  async acceptCookies () {
    await this.acceptCookiesButton.waitForDisplayed();
    await this.acceptCookiesButton.click();
  }

  async fillPickupDate (date) {
    let dateSelector = getDateSelector(date);
    await dateSelector.waitForDisplayed();
    await dateSelector.click();
  }

  async fillDropoffDate (date) {
    let dateSelector = getDateSelector(date);
    await dateSelector.waitForDisplayed();
    await dateSelector.click();
  }
}

export default new MainPage();
