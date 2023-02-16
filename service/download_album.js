const download_photo = require("./download_photo")
const path_generator = require("./path_generator")
const { ALBUM_ID, DELAY } = require("../params")

const download_album = (urls) => {
    return new Promise(resolveAlbum => {

        const downloading = async (url, i, delay) => {
            return await new Promise(resolvePhoto =>
                setTimeout(async () => {
                    const filename = `${i + 1}.jpg`;
                    const folderpath = path_generator(ALBUM_ID);
                    await download_photo(url, folderpath, filename)
                    return resolvePhoto()
                }, delay)
            )

        }

        const promises = urls.map((url, i) => downloading(url, i, DELAY * i))

        Promise.all(promises).then(res => res(resolveAlbum()))
    });
}

module.exports = download_album;