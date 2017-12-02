$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/bittechconsulting/eclipse-workspace/BDDProject/hello.Feature");
formatter.feature({
  "line": 2,
  "name": "TendToEnd test case",
  "description": "",
  "id": "tendtoend-test-case",
  "keyword": "Feature"
});
formatter.before({
  "duration": 218275,
  "status": "passed"
});
formatter.before({
  "duration": 176023,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i  nevigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.i_nevigate_to_url()"
});
formatter.result({
  "duration": 10190468114,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "by a women product scenario",
  "description": "",
  "id": "tendtoend-test-case;by-a-women-product-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I click on women link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on first product",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "select on size",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click buy now",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should be in checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.i_click_on_women_link()"
});
formatter.result({
  "duration": 63665293,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression  because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2),platform\u003dMac OS X 10.10.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 26 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027Bittechs-iMac-2.home\u0027, ip: \u0027192.168.1.21\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.10.5\u0027, java.version: \u00279.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506106 (8a06c39c4582fbfbab6966dbb1c38a9173bfb1a2), userDataDir\u003d/var/folders/p4/rymzg4lj56d9kw4v2srlr0d00000gn/T/.org.chromium.Chromium.xskxNJ}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dMAC, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: df107d9329310519efd4d13378be1e84\n*** Element info: {Using\u003dxpath, value\u003d}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat HomePage.clickWomen(HomePage.java:13)\n\tat Step.i_click_on_women_link(Step.java:43)\n\tat ✽.When I click on women link(/Users/bittechconsulting/eclipse-workspace/BDDProject/hello.Feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "Step.click_on_first_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.select_on_size()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.click_buy_now()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step.i_should_be_in_checkout_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 73616,
  "status": "passed"
});
formatter.after({
  "duration": 111574,
  "status": "passed"
});
formatter.before({
  "duration": 99138,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "i  nevigate to url",
  "keyword": "Given "
});
formatter.match({
  "location": "Step.i_nevigate_to_url()"
});
formatter.result({
  "duration": 12396805591,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "by a man product scenario",
  "description": "",
  "id": "tendtoend-test-case;by-a-man-product-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@regresion"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I click on man link",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "click on first product",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "select on size",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "click buy now",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "i should be in checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step.i_click_on_man_link()"
});
formatter.result({
  "duration": 73842,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_on_first_product()"
});
formatter.result({
  "duration": 28489,
  "status": "passed"
});
formatter.match({
  "location": "Step.select_on_size()"
});
formatter.result({
  "duration": 20362,
  "status": "passed"
});
formatter.match({
  "location": "Step.click_buy_now()"
});
formatter.result({
  "duration": 20752,
  "status": "passed"
});
formatter.match({
  "location": "Step.i_should_be_in_checkout_page()"
});
formatter.result({
  "duration": 343842991,
  "status": "passed"
});
formatter.after({
  "duration": 54938,
  "status": "passed"
});
});