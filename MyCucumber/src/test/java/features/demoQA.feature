Feature: DemoQA Testing

Background: Launch Url and open HTML
Given opened selected browser
When launch url
Then ToolsQA Page displayed

@smokeTest
Scenario: HTML Contact form
Given User is on HTML Contact form
When User enters text "Vinay" in "First Name"
And User enters text "Varma" in "Last Name"
And User enters text "India" in "Country"
Then Click button "submit"
And Target page found

@functionalTest
Scenario: HTML Contact form1
Given User is on HTML Contact form
When User enters form with following details
| Kumar | Vinay | America|
Then Click button "submit"
And Target page found

@functionalTest
Scenario: HTML Contact form2
Given User is on HTML Contact form
When User enters form with following details
| Vinay | Simha | Australia|
Then Click button "submit"
And Target page found

@smokeTest
Scenario Outline: HTML Contact form3
Given User is on HTML Contact form
When User enters form with <fname> and <lname> and <country> details
Then Click button "submit"
And Target page found

Examples:
|fname 	   |lname	 |country	|
|Vinay1    |Simha1   |India	|
|Vinay2    |Simha2   |United States	|
|Vinay3    |Simha3   |Canada	|
|Vinay4    |Simha4   |Ireland	|

