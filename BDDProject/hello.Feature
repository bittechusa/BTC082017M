
Feature: TendToEnd test case

 Background:
  Given i  nevigate to url
  
  
    @smoke
  Scenario: by a women product scenario
   
  
    When I click on women link
    And click on first product
    And select on size
    And click buy now
    Then i should be in checkout page

@regresion
Scenario: by a man product scenario
   
    
    When I click on man link
    And click on first product
    And select on size
    And click buy now
    Then i should be in checkout page



  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
