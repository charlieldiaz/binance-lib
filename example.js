async getOpenOrders(symbol){
        const endPoint = "/api/v3/openOrders";
        const params = sortParamsAlphabeticallyOmitEmptySignV({symbol, timestamp: Date.now() });
        const signature = getSignature(params, this.secretKey);
        let url = `${this.base}${endPoint}?${params}&signature=${signature}`;
        const requestOptions = {
            headers: { 'X-MBX-APIKEY': this.publicKey },
            url,
            method: "GET"
        };
        let response;
        try {
            response = await axios(requestOptions);
        } catch (e) {
            console.log(e)
        }
        return response.data
    }
}
