#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
Feature: login validation

#Scenario:
#Given I nevigate to url
#When I entered user and password
#And I click login
#Then I should be in login page

Scenario Outline: 
Given I nevigate to url
When I entered <user> and password <pass>
And I click login
Then I should be in login page

Examples:
|user|pass|
|"abc"|"123"|
|"def"|"456"|
