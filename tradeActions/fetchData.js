const axios = require('axios');
const logger = require('../logger')

const TEST_NET_BASE_URL = "https://testnet.binancefuture.com/fapi/"

async function fetchData(requestOptions, endPoint) {
    try {
        const uniqueUrl = requestOptions.url
        requestOptions.url = `${TEST_NET_BASE_URL}${uniqueUrl}`;

        let response = await axios(requestOptions);

        if (response.status === 200) {
            logger.debug({
                weight: response.headers['x-mbx-used-weight-1m'],
                status: response.status,
                endPoint: endPoint,
            })
        }
        return response.data;
    }
    catch (e) {
        console.log(e);
        console.log('---------------------------------------------------------');
        logger.error({
            weight: e.response.headers['x-mbx-used-weight-1m'],
            status: e.response.status,
            url: e.response.config.url,
            errorCode: e.response.data.code,
            errorMsg: e.response.data.msg,
            endPoint: endPoint,
        })
        throw new Error("Call failed")
    }
}

module.exports = { fetchData }