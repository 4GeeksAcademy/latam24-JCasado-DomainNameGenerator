/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronouns = ["the","our"];
  const adjs = ["great","big"];
  const nouns = ["jogger","racoon"];
  const extens = [".com",".us",".io",".es"];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let exten of extens) {
          console.log(pronoun,adj,noun,exten);
        }
      }
    }
  }
};
  //write your code here
  console.log("Hello Rigo from the console!");
};
