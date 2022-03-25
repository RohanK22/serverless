const axios = require("axios");

export default async function handler(request, response) {
    const res = await axios.get('https://ipfs.io/ipfs/' + "QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm", { timeout: 15000 });
    //console.log(res.data);
    response.status(200).json({
        data: res.data,
    })
}
