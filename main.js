const cache_urls = require("./service/cache_urls");
const download_album = require("./service/download_album");
const get_album = require("./service/get_album");

get_album().then((urls) => {
    cache_urls(urls)
    download_album(urls)
}).finally(() => console.log("Completed!"));