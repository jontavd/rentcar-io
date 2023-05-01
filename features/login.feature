Feature: The Internet Guinea Pig Website

  Background:

#  Scenario: As a user, I can log into the secure area
#    When I fill the form with the rent details
#    Then I wait 2 seconds
#
#  Scenario: As a user, I can log into the secure area
#    When I fill the form with the second rent details
#    Then I wait 2 seconds

  Scenario Outline:
    Given I am on the main pages
    And I select <city>> as the pickup location
    When I fill the <pickupdate> and I fill the <dropoffdate>
    Then I wait 2 seconds

    Examples:
      | city   | pickupdate | dropoffdate |
      | lisboa | May20      | May27       |
      | lisboa | May20      | May28       |
      | lisboa | May20      | Jun03       |
      | lisboa | May20      | Jun04       |
      | lisboa | May20      | Jun10       |
      | lisboa | May20      | Jun11       |
      | lisboa | May20      | Jun17       |
      | lisboa | May21      | May27       |
      | lisboa | May21      | May28       |
      | lisboa | May21      | Jun03       |
      | lisboa | May21      | Jun04       |
      | lisboa | May21      | Jun10       |
      | lisboa | May21      | Jun11       |
      | lisboa | May21      | Jun17       |
      | lisboa | May21      | Jun18       |
      | porto  | May20      | May27       |
      | porto  | May20      | May28       |
      | porto  | May20      | Jun03       |
      | porto  | May20      | Jun04       |
      | porto  | May20      | Jun10       |
      | porto  | May20      | Jun11       |
      | porto  | May20      | Jun17       |
      | porto  | May21      | May27       |
      | porto  | May21      | May28       |
      | porto  | May21      | Jun03       |
      | porto  | May21      | Jun04       |
      | porto  | May21      | Jun10       |
      | porto  | May21      | Jun11       |
      | porto  | May21      | Jun17       |
      | porto  | May21      | Jun18       |