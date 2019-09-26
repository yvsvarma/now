$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demoQA.feature");
formatter.feature({
  "line": 1,
  "name": "DemoQA Testing",
  "description": "",
  "id": "demoqa-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4748892528,
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
  "duration": 1221395529,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.launch_url()"
});
