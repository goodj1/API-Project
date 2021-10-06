app.js0000644000000000000000000000315614125632760010705 0ustar  rootrootconst axios = require('axios');
const eolURL = 'https://endoflife.date/api/node.js';
const dogBreedsURL = 'https://dog.ceo/api/breeds/image/random';
const covidTrackingURL = 'https://api.covidtracking.com/v1/states/daily.json';

// checking for valid url protocols
const isvalidProtocol = (apiUrl) => {
    const valid = /^(http|https):\/\/[^ "]+$/

    console.log({
        url: apiUrl,
        isvalidURL: valid.test(apiUrl)
    })

    return valid.test(apiUrl);
}

const getAPIData = async (apiUrl) => {
    try {
        // checking for invalid url
        if (isvalidProtocol(apiUrl) === false) {
            return 'invalid url'
        }

        // json output won't be printed in console for invalid url(s)
        console.log({
            apiUrl,
            Protocol: isvalidProtocol(apiUrl)
        })

        // making a get request to the API's url
        const apiResp = await axios.get(apiUrl);
        console.log({
            url: apiUrl,
            status: await apiResp.status,
            contentLength: await apiResp.headers["content-length"],
            dateAndTime: await apiResp.headers.date
        })

        return {
            url: apiUrl,
            status: await apiResp.status,
            contentLength: await apiResp.headers["content-length"],
            dateAndTime: await apiResp.headers.date
        }
    } catch (err) {
        console.log({
            err
        })

        return err;
    }
};

isvalidProtocol(eolURL);
isvalidProtocol(dogBreedsURL);
isvalidProtocol(covidTrackingURL);
getAPIData(eolURL);
getAPIData(dogBreedsURL);
getAPIData(covidTrackingURL)

module.exports = getAPIData;
