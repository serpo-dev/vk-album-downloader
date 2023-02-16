const { TOKEN, VK_API_VERSION, USER_ID, ALBUM_ID, BATCH_SIZE } = require("../params")

const findFull = (item) => {
    const { sizes } = item;
    const sorted = sizes.sort((a, b) => a.height - b.height);
    const last = sorted.length - 1;
    return sorted[last];
}

const get_album = () => {
    return new Promise(resolve => {

        let data = [];

        const baseURL = `https://api.vk.com/method/photos.get`;

        const params = new URLSearchParams({
            access_token: TOKEN,
            v: VK_API_VERSION,

            owner_id: USER_ID,
            album_id: ALBUM_ID,
            count: BATCH_SIZE,
        })

        const url = `${baseURL}?${params}`;

        const fetching = async (offset) => {
            const urlWithOffset = `${url}&offset=${offset}`

            return await fetch(urlWithOffset, {
                method: "GET",
            }).then(res => res.json());
        }

        const interval = setInterval(async () => {
            const { response } = await fetching(data.length);

            const total = response.count;
            const current = data.length + response.items.length;

            response.items.forEach(item => {
                const url = findFull(item).url;
                data.push(url);

                console.log(`Processing... ${data.length} / ${total}`)
            })

            if (total <= current) {
                clearInterval(interval)
                return resolve(data);
            }
        }, 2000)
    })
};

module.exports = get_album;