// Import stylesheets
import "./style.css";
import { userA as ua, userB as ub } from "./userManagement";
import defaultTeam from "./teamManagement";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var p = new Promise((resolve, reject) => {
  setTimeout(function() {
    try {
      //let i = 30 / 10;
      //throw new exception("dfd");
      resolve(ua);
    } catch (e) {
      console.log('catch1');
      reject(ub);
    }
  }, 1000);
});

p.then(p => {
  console.log('p');
  return ua;
})
  .then(i => {
    console.log('i'+i);
    defaultTeam.showMsg();
    return defaultTeam;
  })
  .then(i => {
    console.log(i.teamName);
  })
  .catch(function(e) {
    console.log('catch2');
  });
