Feature: login

  
  
    @smoke
  Scenario: by a women product scenario
   Given open browser
   |firefox|
   |chrome|
   |ie|
  And nevigate to url
    When I click on women link
    And click on first product
    And select on size
    And click buy now
    Then i should be in checkout page
