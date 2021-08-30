/* eslint-disable */
import "bootstrap";
import "./style.css";

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector("#name").innerHTML = domainName();
});

let pronoun = ["the", "this", "that", "last"];
let adj = ["great", "pink", "big"];
let noun = ["kitty", "swag", "punk"];
let ending = [".com", ".net", ".us"];
function domainName() {
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;

  let generate = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ending.length; l++) {
          generate += pronoun[i] + adj[j] + noun[k] + ending[l] + " <br>";
        }
      }
    }
  }
  return generate;
}
