const promises = require("fs");
const path = require("path");

const download_photo = async (url, folderpath, filename) => {
    return new Promise(async (resolve, reject) => {
        const filepath = path.join(folderpath, String(filename));

        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const array_buffer = await blob.arrayBuffer();
            const buffer = Buffer.from(array_buffer);
            promises.writeFile(filepath, buffer, null, () => {
                console.log(`${filename} is downloaded successfully!`)
                return resolve
            })
        } catch (err) {
            return reject;
        }
    });
}

module.exports = download_photo