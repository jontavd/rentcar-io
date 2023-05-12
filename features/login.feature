Feature: The Internet Guinea Pig Website

  @alldates
  Scenario:
    Given I prepare the calendar dates for the test
    And I select the cities for pickup location
    And I search the using the prepared data

  @specificdates
  Scenario Outline:
    And I search the city with <pickupDate> and <dropOffDate> data
    Examples:
      | pickupDate | dropOffDate |
      | 2023-06-03 | 2023-06-10 |
      | 2023-06-03 | 2023-06-11 |
      | 2023-06-03 | 2023-06-12 |
      | 2023-06-03 | 2023-06-13 |
      | 2023-06-03 | 2023-06-14 |
      | 2023-06-03 | 2023-06-15 |
      | 2023-06-03 | 2023-06-16 |
      | 2023-06-03 | 2023-06-17 |
      | 2023-06-03 | 2023-06-18 |
      | 2023-06-03 | 2023-06-19 |
      | 2023-06-03 | 2023-06-20 |
      | 2023-06-03 | 2023-06-21 |
      | 2023-06-03 | 2023-06-22 |
      | 2023-06-03 | 2023-06-23 |
      | 2023-06-03 | 2023-06-24 |
      | 2023-06-03 | 2023-06-25 |
      | 2023-06-03 | 2023-06-26 |
      | 2023-06-03 | 2023-06-27 |
      | 2023-06-03 | 2023-06-28 |
      | 2023-06-03 | 2023-06-29 |
      | 2023-06-03 | 2023-06-30 |