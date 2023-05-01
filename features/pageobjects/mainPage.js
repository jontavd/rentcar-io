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
    return $("#from");
  }

  get pickupMay02 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupMay03 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupMay04 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupMay05 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupMay06 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupMay07 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupMay08 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupMay09 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupMay10 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupMay11 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupMay12 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupMay13 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupMay14 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupMay15 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupMay16 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupMay17 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupMay18 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupMay19 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupMay20 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupMay21 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(4) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupMay22 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupMay23 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupMay24 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupMay25 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupMay26 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupMay27 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupMay28 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(5) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupMay29 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupMay30 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(6) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupMay31 () {
    return $('.mes1 > div:nth-child(1) > div:nth-child(6) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupJun01 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupJun02 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupJun03 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupJun04 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupJun05 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupJun06 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupJun07 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupJun08 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupJun09 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupJun10 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupJun11 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(3) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupJun12 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1)');
  }

  get pickupJun13 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1)');
  }

  get pickupJun14 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1)');
  }

  get pickupJun15 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(4) > div:nth-child(1)');
  }

  get pickupJun16 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(5) > div:nth-child(1)');
  }

  get pickupJun17 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(6) > div:nth-child(1)');
  }

  get pickupJun18 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(4) > div:nth-child(7) > div:nth-child(1)');
  }

  get pickupJun19 () {
    return $('.mes2 > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1)');
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
}

export default new MainPage();
