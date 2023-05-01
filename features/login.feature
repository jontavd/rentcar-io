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
#      | lisboa | May02      | May16       |
#      | lisboa | May02      | May17       |
#      | lisboa | May02      | May18       |
#      | lisboa | May02      | May19       |
#      | lisboa | May02      | May20       |
#      | lisboa | May02      | May21       |
#      | lisboa | May02      | May22       |
#      | lisboa | May02      | May23       |
#      | lisboa | May02      | May24       |
#      | lisboa | May02      | May25       |
#      | lisboa | May02      | May26       |
#      | lisboa | May02      | May27       |
#      | lisboa | May02      | May28       |
#      | lisboa | May02      | May29       |
#      | lisboa | May02      | May30       |
#      | lisboa | May02      | May31       |
#      | lisboa | May03      | May16       |
#      | lisboa | May03      | May17       |
#      | lisboa | May03      | May18       |
#      | lisboa | May03      | May19       |
#      | lisboa | May03      | May20       |
#      | lisboa | May03      | May21       |
#      | lisboa | May03      | May22       |
#      | lisboa | May03      | May23       |
#      | lisboa | May03      | May24       |
#      | lisboa | May03      | May25       |
#      | lisboa | May03      | May26       |
#      | lisboa | May03      | May27       |
#      | lisboa | May03      | May28       |
#      | lisboa | May03      | May29       |
#      | lisboa | May03      | May30       |
#      | lisboa | May03      | May31       |
#      | lisboa | May04      | May16       |
#      | lisboa | May04      | May17       |
#      | lisboa | May04      | May18       |
#      | lisboa | May04      | May19       |
#      | lisboa | May04      | May20       |
#      | lisboa | May04      | May21       |
#      | lisboa | May04      | May22       |
#      | lisboa | May04      | May23       |
#      | lisboa | May04      | May24       |
#      | lisboa | May04      | May25       |
#      | lisboa | May04      | May26       |
#      | lisboa | May04      | May27       |
#      | lisboa | May04      | May28       |
#      | lisboa | May04      | May29       |
#      | lisboa | May04      | May30       |
#      | lisboa | May04      | May31       |
#      | lisboa | May05      | May16       |
#      | lisboa | May05      | May17       |
#      | lisboa | May05      | May18       |
#      | lisboa | May05      | May19       |
#      | lisboa | May05      | May20       |
#      | lisboa | May05      | May21       |
#      | lisboa | May05      | May22       |
#      | lisboa | May05      | May23       |
#      | lisboa | May05      | May24       |
#      | lisboa | May05      | May25       |
#      | lisboa | May05      | May26       |
#      | lisboa | May05      | May27       |
#      | lisboa | May05      | May28       |
#      | lisboa | May05      | May29       |
#      | lisboa | May05      | May30       |
#      | lisboa | May05      | May31       |
#      | lisboa | May06      | May16       |
#      | lisboa | May06      | May17       |
#      | lisboa | May06      | May18       |
#      | lisboa | May06      | May19       |
#      | lisboa | May06      | May20       |
#      | lisboa | May06      | May21       |
#      | lisboa | May06      | May22       |
#      | lisboa | May06      | May23       |
#      | lisboa | May06      | May24       |
#      | lisboa | May06      | May25       |
#      | lisboa | May06      | May26       |
#      | lisboa | May06      | May27       |
#      | lisboa | May06      | May28       |
#      | lisboa | May06      | May29       |
#      | lisboa | May06      | May30       |
#      | lisboa | May06      | May31       |
#      | lisboa | May07      | May16       |
#      | lisboa | May07      | May17       |
#      | lisboa | May07      | May18       |
#      | lisboa | May07      | May19       |
#      | lisboa | May07      | May20       |
#      | lisboa | May07      | May21       |
#      | lisboa | May07      | May22       |
#      | lisboa | May07      | May23       |
#      | lisboa | May07      | May24       |
#      | lisboa | May07      | May25       |
#      | lisboa | May07      | May26       |
#      | lisboa | May07      | May27       |
#      | lisboa | May07      | May28       |
#      | lisboa | May07      | May29       |
#      | lisboa | May07      | May30       |
#      | lisboa | May07      | May31       |
      | porto  | May02      | May16       |
      | porto  | May02      | May17       |
      | porto  | May02      | May18       |
      | porto  | May02      | May19       |
      | porto  | May02      | May20       |
      | porto  | May02      | May21       |
      | porto  | May02      | May22       |
      | porto  | May02      | May23       |
      | porto  | May02      | May24       |
      | porto  | May02      | May25       |
      | porto  | May02      | May26       |
      | porto  | May02      | May27       |
      | porto  | May02      | May28       |
      | porto  | May02      | May29       |
      | porto  | May02      | May30       |
      | porto  | May02      | May31       |
      | porto  | May03      | May16       |
      | porto  | May03      | May17       |
      | porto  | May03      | May18       |
      | porto  | May03      | May19       |
      | porto  | May03      | May20       |
      | porto  | May03      | May21       |
      | porto  | May03      | May22       |
      | porto  | May03      | May23       |
      | porto  | May03      | May24       |
      | porto  | May03      | May25       |
      | porto  | May03      | May26       |
      | porto  | May03      | May27       |
      | porto  | May03      | May28       |
      | porto  | May03      | May29       |
      | porto  | May03      | May30       |
      | porto  | May03      | May31       |
      | porto  | May04      | May16       |
      | porto  | May04      | May17       |
      | porto  | May04      | May18       |
      | porto  | May04      | May19       |
      | porto  | May04      | May20       |
      | porto  | May04      | May21       |
      | porto  | May04      | May22       |
      | porto  | May04      | May23       |
      | porto  | May04      | May24       |
      | porto  | May04      | May25       |
      | porto  | May04      | May26       |
      | porto  | May04      | May27       |
      | porto  | May04      | May28       |
      | porto  | May04      | May29       |
      | porto  | May04      | May30       |
      | porto  | May04      | May31       |
      | porto  | May05      | May16       |
      | porto  | May05      | May17       |
      | porto  | May05      | May18       |
      | porto  | May05      | May19       |
      | porto  | May05      | May20       |
      | porto  | May05      | May21       |
      | porto  | May05      | May22       |
      | porto  | May05      | May23       |
      | porto  | May05      | May24       |
      | porto  | May05      | May25       |
      | porto  | May05      | May26       |
      | porto  | May05      | May27       |
      | porto  | May05      | May28       |
      | porto  | May05      | May29       |
      | porto  | May05      | May30       |
      | porto  | May05      | May31       |
      | porto  | May06      | May16       |
      | porto  | May06      | May17       |
      | porto  | May06      | May18       |
      | porto  | May06      | May19       |
      | porto  | May06      | May20       |
      | porto  | May06      | May21       |
      | porto  | May06      | May22       |
      | porto  | May06      | May23       |
      | porto  | May06      | May24       |
      | porto  | May06      | May25       |
      | porto  | May06      | May26       |
      | porto  | May06      | May27       |
      | porto  | May06      | May28       |
      | porto  | May06      | May29       |
      | porto  | May06      | May30       |
      | porto  | May06      | May31       |
      | porto  | May07      | May16       |
      | porto  | May07      | May17       |
      | porto  | May07      | May18       |
      | porto  | May07      | May19       |
      | porto  | May07      | May20       |
      | porto  | May07      | May21       |
      | porto  | May07      | May22       |
      | porto  | May07      | May23       |
      | porto  | May07      | May24       |
      | porto  | May07      | May25       |
      | porto  | May07      | May26       |
      | porto  | May07      | May27       |
      | porto  | May07      | May28       |
      | porto  | May07      | May29       |
      | porto  | May07      | May30       |
      | porto  | May07      | May31       |