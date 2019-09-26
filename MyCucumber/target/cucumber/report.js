$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demoQA.feature");
formatter.feature({
  "line": 1,
  "name": "DemoQA Testing",
  "description": "",
  "id": "demoqa-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10291702447,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch Url and open HTML",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "opened selected browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ToolsQA Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.opened_selected_browser()"
});
formatter.result({
  "duration": 2261917262,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
formatter.result({
  "duration": 5624499019,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.toolsqa_page_displayed()"
});
formatter.result({
  "duration": 28217007,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "HTML Contact form",
  "description": "",
  "id": "demoqa-testing;html-contact-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters text \"Vinay\" in \"First Name\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User enters text \"Varma\" in \"Last Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters text \"India\" in \"Country\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 5874722372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay",
      "offset": 18
    },
    {
      "val": "First Name",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "duration": 75046376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Varma",
      "offset": 18
    },
    {
      "val": "Last Name",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "duration": 46698543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 18
    },
    {
      "val": "Country",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "duration": 50611421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "duration": 6355558942,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "duration": 20421372,
  "status": "passed"
});
formatter.after({
  "duration": 33589,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters form with \u003cfname\u003e and \u003clname\u003e and \u003ccountry\u003e details",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Target page found",
  "keyword": "And "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "country"
      ],
      "line": 41,
      "id": "demoqa-testing;html-contact-form3;;1"
    },
    {
      "cells": [
        "Vinay1",
        "Simha1",
        "India"
      ],
      "line": 42,
      "id": "demoqa-testing;html-contact-form3;;2"
    },
    {
      "cells": [
        "Vinay2",
        "Simha2",
        "United States"
      ],
      "line": 43,
      "id": "demoqa-testing;html-contact-form3;;3"
    },
    {
      "cells": [
        "Vinay3",
        "Simha3",
        "Canada"
      ],
      "line": 44,
      "id": "demoqa-testing;html-contact-form3;;4"
    },
    {
      "cells": [
        "Vinay4",
        "Simha4",
        "Ireland"
      ],
      "line": 45,
      "id": "demoqa-testing;html-contact-form3;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8198377594,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch Url and open HTML",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "opened selected browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ToolsQA Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.opened_selected_browser()"
});
formatter.result({
  "duration": 1799339901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
formatter.result({
  "duration": 6735018634,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.toolsqa_page_displayed()"
});
formatter.result({
  "duration": 27651415,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters form with Vinay1 and Simha1 and India details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 5822810153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay1",
      "offset": 22
    },
    {
      "val": "Simha1",
      "offset": 33
    },
    {
      "val": "India",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "duration": 163397622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "duration": 6389937666,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "duration": 18889572,
  "status": "passed"
});
formatter.after({
  "duration": 29384,
  "status": "passed"
});
formatter.before({
  "duration": 8642268242,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch Url and open HTML",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "opened selected browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ToolsQA Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.opened_selected_browser()"
});
formatter.result({
  "duration": 1219923689,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
formatter.result({
  "duration": 7502098248,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.toolsqa_page_displayed()"
});
formatter.result({
  "duration": 30604689,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters form with Vinay2 and Simha2 and United States details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 5795990681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay2",
      "offset": 22
    },
    {
      "val": "Simha2",
      "offset": 33
    },
    {
      "val": "United States",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "duration": 207851657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "duration": 6275518211,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "duration": 19459675,
  "status": "passed"
});
formatter.after({
  "duration": 24604,
  "status": "passed"
});
formatter.before({
  "duration": 6276737216,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch Url and open HTML",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "opened selected browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ToolsQA Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.opened_selected_browser()"
});
formatter.result({
  "duration": 2315509513,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
formatter.result({
  "duration": 4777307195,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.toolsqa_page_displayed()"
});
formatter.result({
  "duration": 24384966,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters form with Vinay3 and Simha3 and Canada details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 1272270480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay3",
      "offset": 22
    },
    {
      "val": "Simha3",
      "offset": 33
    },
    {
      "val": "Canada",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "duration": 329534530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "duration": 1610360149,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "duration": 17855998,
  "status": "passed"
});
formatter.after({
  "duration": 25855,
  "status": "passed"
});
formatter.before({
  "duration": 13768227917,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Launch Url and open HTML",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "opened selected browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "launch url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "ToolsQA Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.opened_selected_browser()"
});
formatter.result({
  "duration": 2512502478,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
formatter.result({
  "duration": 4503730902,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.toolsqa_page_displayed()"
});
formatter.result({
  "duration": 25338791,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 33,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User enters form with Vinay4 and Simha4 and Ireland details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 1159853946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay4",
      "offset": 22
    },
    {
      "val": "Simha4",
      "offset": 33
    },
    {
      "val": "Ireland",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "duration": 297069709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "duration": 1242262286,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "duration": 19829308,
  "status": "passed"
});
formatter.after({
  "duration": 152143,
  "status": "passed"
});
formatter.uri("demoQAhooks.feature");
formatter.feature({
  "line": 1,
  "name": "DemoQA Testing",
  "description": "",
  "id": "demoqa-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 9339101508,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "HTML Contact form",
  "description": "",
  "id": "demoqa-testing;html-contact-form",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters text \"Vinay\" in \"First Name\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters text \"Varma\" in \"Last Name\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters text \"India\" in \"Country\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 284306534,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027HTML contact form\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EXIHYD-IM-087.local\u0027, ip: \u0027fe80:0:0:0:8bb:49b2:f109:78ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.12 (220b19a666554..., userDataDir: /var/folders/49/0qk6srpd0_v...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44b3b12dd4a6ad1b2d0ec5d705b483ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027HTML contact form\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.StepDefinition.user_is_on_html_contact_form(StepDefinition.java:54)\n\tat ✽.Given User is on HTML Contact form(demoQAhooks.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay",
      "offset": 18
    },
    {
      "val": "First Name",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Varma",
      "offset": 18
    },
    {
      "val": "Last Name",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 18
    },
    {
      "val": "Country",
      "offset": 29
    }
  ],
  "location": "StepDefinition.user_enters_text_something_in_something(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42036,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters form with \u003cfname\u003e and \u003clname\u003e and \u003ccountry\u003e details",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Target page found",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;",
  "rows": [
    {
      "cells": [
        "fname",
        "lname",
        "country"
      ],
      "line": 36,
      "id": "demoqa-testing;html-contact-form3;;1"
    },
    {
      "cells": [
        "Vinay1",
        "Simha1",
        "India"
      ],
      "line": 37,
      "id": "demoqa-testing;html-contact-form3;;2"
    },
    {
      "cells": [
        "Vinay2",
        "Simha2",
        "United States"
      ],
      "line": 38,
      "id": "demoqa-testing;html-contact-form3;;3"
    },
    {
      "cells": [
        "Vinay3",
        "Simha3",
        "Canada"
      ],
      "line": 39,
      "id": "demoqa-testing;html-contact-form3;;4"
    },
    {
      "cells": [
        "Vinay4",
        "Simha4",
        "Ireland"
      ],
      "line": 40,
      "id": "demoqa-testing;html-contact-form3;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13257641523,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters form with Vinay1 and Simha1 and India details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 10474632,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027HTML contact form\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EXIHYD-IM-087.local\u0027, ip: \u0027fe80:0:0:0:8bb:49b2:f109:78ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.12 (220b19a666554..., userDataDir: /var/folders/49/0qk6srpd0_v...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44b3b12dd4a6ad1b2d0ec5d705b483ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027HTML contact form\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.StepDefinition.user_is_on_html_contact_form(StepDefinition.java:54)\n\tat ✽.Given User is on HTML Contact form(demoQAhooks.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay1",
      "offset": 22
    },
    {
      "val": "Simha1",
      "offset": 33
    },
    {
      "val": "India",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31474,
  "status": "passed"
});
formatter.before({
  "duration": 7845044274,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters form with Vinay2 and Simha2 and United States details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 9116336,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027HTML contact form\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EXIHYD-IM-087.local\u0027, ip: \u0027fe80:0:0:0:8bb:49b2:f109:78ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.12 (220b19a666554..., userDataDir: /var/folders/49/0qk6srpd0_v...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44b3b12dd4a6ad1b2d0ec5d705b483ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027HTML contact form\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.StepDefinition.user_is_on_html_contact_form(StepDefinition.java:54)\n\tat ✽.Given User is on HTML Contact form(demoQAhooks.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay2",
      "offset": 22
    },
    {
      "val": "Simha2",
      "offset": 33
    },
    {
      "val": "United States",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44439,
  "status": "passed"
});
formatter.before({
  "duration": 10989845082,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters form with Vinay3 and Simha3 and Canada details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 8419392,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027HTML contact form\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EXIHYD-IM-087.local\u0027, ip: \u0027fe80:0:0:0:8bb:49b2:f109:78ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.12 (220b19a666554..., userDataDir: /var/folders/49/0qk6srpd0_v...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44b3b12dd4a6ad1b2d0ec5d705b483ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027HTML contact form\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.StepDefinition.user_is_on_html_contact_form(StepDefinition.java:54)\n\tat ✽.Given User is on HTML Contact form(demoQAhooks.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay3",
      "offset": 22
    },
    {
      "val": "Simha3",
      "offset": 33
    },
    {
      "val": "Canada",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34583,
  "status": "passed"
});
formatter.before({
  "duration": 7937392010,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "HTML Contact form3",
  "description": "",
  "id": "demoqa-testing;html-contact-form3;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is on HTML Contact form",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User enters form with Vinay4 and Simha4 and Ireland details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Click button \"submit\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Target page found",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_is_on_html_contact_form()"
});
formatter.result({
  "duration": 10231170,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027HTML contact form\u0027]\"}\n  (Session info: chrome\u003d77.0.3865.90)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027EXIHYD-IM-087.local\u0027, ip: \u0027fe80:0:0:0:8bb:49b2:f109:78ab%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.12 (220b19a666554..., userDataDir: /var/folders/49/0qk6srpd0_v...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44b3b12dd4a6ad1b2d0ec5d705b483ef\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027HTML contact form\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat stepDefinitions.StepDefinition.user_is_on_html_contact_form(StepDefinition.java:54)\n\tat ✽.Given User is on HTML Contact form(demoQAhooks.feature:30)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vinay4",
      "offset": 22
    },
    {
      "val": "Simha4",
      "offset": 33
    },
    {
      "val": "Ireland",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_form_with_and_and_details(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "submit",
      "offset": 14
    }
  ],
  "location": "StepDefinition.click_button_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.target_page_found()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32118,
  "status": "passed"
});
});