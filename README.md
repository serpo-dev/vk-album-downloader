# vk-album-downloader

A straightforward JS script created for downloading all photos from the album on [VK](https://vk.com). and is running by CLI.

##### ⚠ Warning ⚠
It needs an authorization token that provides an access to your profile photos (and to your groups if you download photos from the private group).

### Dependencies

You need have `node` version `18.0+` to be installed on your desktop globally.

### Using
1. Open `params.js` in the root directory. Fill these values:
- By default, your `TOKEN` must provide only **photos** access. But it won't be enough if you want to download a photo from a private group. So you also need a **groups** permission.
- `ALBUM_ID` is album's id (for example, we have a link "https//vk.com/album12345_**67890**". The "67890" is album's id.).
- `USER_ID` is user's id. There is a "12345" in the link above.
- `VK_API_VERSION` is current version of VK API (you can find it [here](https://dev.vk.com/api/api-requests)).
- `BATCH-SIZE` is size of one request to the VK API (it's upper limited by **1000**).
- `DELAY` is a delay (*ms*) between requests for downloading image by the url. Recommended value is no less than 100.

2. Run the main script by the command:
```sh
node main.js
```

3. Links of found album's photos will be added to the `urls.txt` file in a root directory. And all photos in JPG format will be saved in the folder `/downloads/photos/[album_id]`.

```
vk-albums-download
│
├──  service/ 
├──  downloads/
│      └── photos/...
│            └── [album_id]
│      
└── urls.txt
└── main.js
└── params.js
```
