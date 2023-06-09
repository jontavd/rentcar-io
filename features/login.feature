Feature: The Internet Guinea Pig Website

  @alldates
  Scenario:
    Given I prepare the calendar dates for the test
    And I select the cities for pickup location
    And I search the using the prepared data

  @specificdates
  Scenario Outline:
    Given I search the city with <pickupDate> and <dropoffDate> data
    Examples:
      | pickupDate | dropoffDate |
      | 2023-05-20 | 2023-05-27 |
      | 2023-05-20 | 2023-05-28 |
      | 2023-05-20 | 2023-06-03 |
      | 2023-05-20 | 2023-06-04 |
      | 2023-05-20 | 2023-06-10 |
      | 2023-05-20 | 2023-06-11 |
      | 2023-05-20 | 2023-06-17 |
      | 2023-05-21 | 2023-05-28 |
      | 2023-05-21 | 2023-06-03 |
      | 2023-05-21 | 2023-06-04 |
      | 2023-05-21 | 2023-06-10 |
      | 2023-05-21 | 2023-06-11 |
      | 2023-05-21 | 2023-06-17 |
      | 2023-05-21 | 2023-06-18 |
      | 2023-05-27 | 2023-06-03 |
      | 2023-05-27 | 2023-06-04 |
      | 2023-05-27 | 2023-06-10 |
      | 2023-05-27 | 2023-06-11 |
      | 2023-05-27 | 2023-06-17 |
      | 2023-05-27 | 2023-06-18 |
      | 2023-05-27 | 2023-06-24 |
      | 2023-05-28 | 2023-06-04 |
      | 2023-05-28 | 2023-06-10 |
      | 2023-05-28 | 2023-06-11 |
      | 2023-05-28 | 2023-06-17 |
      | 2023-05-28 | 2023-06-18 |
      | 2023-05-28 | 2023-06-24 |
      | 2023-05-28 | 2023-06-25 |
      | 2023-06-03 | 2023-06-10 |
      | 2023-06-03 | 2023-06-11 |
      | 2023-06-03 | 2023-06-17 |
      | 2023-06-03 | 2023-06-18 |
      | 2023-06-03 | 2023-06-24 |
      | 2023-06-03 | 2023-06-25 |
      | 2023-06-04 | 2023-06-11 |
      | 2023-06-04 | 2023-06-17 |
      | 2023-06-04 | 2023-06-18 |
      | 2023-06-04 | 2023-06-24 |
      | 2023-06-04 | 2023-06-25 |
      | 2023-06-10 | 2023-06-17 |
      | 2023-06-10 | 2023-06-18 |
      | 2023-06-10 | 2023-06-24 |
      | 2023-06-10 | 2023-06-25 |
      | 2023-06-11 | 2023-06-18 |
      | 2023-06-11 | 2023-06-24 |
      | 2023-06-11 | 2023-06-25 |
      | 2023-06-17 | 2023-06-24 |
      | 2023-06-17 | 2023-06-25 |
      | 2023-06-18 | 2023-06-25 |
