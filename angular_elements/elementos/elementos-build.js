const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/elementos/runtime-es2015.js",
    "./dist/elementos/polyfills-es2015.js",
    "./dist/elementos/scripts.js",
    "./dist/elementos/main-es2015.js"
  ];

  await fs.ensureDir("elementos");
  await concat(files, "elementos/elementos.js");
  await fs.copyFile("./dist/elementos/styles.css", "elementos/styles.css");
})();
