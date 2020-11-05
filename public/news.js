const createRequire = require("module");
const require = createRequire(import.meta.url);

const key = require("../server.js");
console.log(key);
document.getElementById("news").innerHTML = "abcd";
