const fs = require('fs');
const path = require('path');

const downloads_path = path.resolve(path.join(__dirname.split("service").join(""), 'downloads'));

if (!fs.existsSync(downloads_path)) {
    fs.mkdirSync(downloads_path);
}

const photos_path = path.resolve(path.join(downloads_path, 'photos'));

if (!fs.existsSync(photos_path)) {
    fs.mkdirSync(photos_path);
}

const album_path = (album_id) => {
    const folderpath = path.resolve(path.join(photos_path, String(album_id)));

    if (!fs.existsSync(folderpath)) {
        fs.mkdirSync(folderpath)
    }

    return folderpath;
}

module.exports = album_path;