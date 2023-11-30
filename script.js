//your JS code here. If required.
let browserName = navigator.appName;
let version = navigator.appVersion;
let divContainer = document.getElementById("browser_info");
divContainer.innerHTML = "You are using " + browserName + " version " + version;
