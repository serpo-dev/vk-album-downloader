const fs = require("fs")

const cache_urls = (array) => {
    fs.writeFile("urls.txt", array.join("\n"), { encoding: "utf8" }, () => { console.log("urls.txt saved successfully") })
}

module.exports = cache_urls;