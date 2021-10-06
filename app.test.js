__tests__/0000775000000000000000000000000014125405474011522 5ustar  rootroot__tests__/app.test.js0000664000000000000000000000335114125633261013615 0ustar  rootrootconst axios = require('axios');
const getAPIData = require('../app.js');

jest.mock('axios');

describe('app.js tests', () => {
    describe('getAPIData', () => {
        it('should return "invalid url" when bad url', async () => {
            // Setup
            const url = 'httpsss://google.com'

            // Expected
            const expectedResult = 'invalid url'

            // Actual/Assertion
            const actualResults = await getAPIData(url);
            return expect(actualResults).toEqual(expectedResult);
        })

        it('should return values when good url', async () => {
            // Setup
            const url = 'https://google.com'

            axios.get.mockReturnValue({
                status: 200,
                headers: {
                    'content-length': 500,
                    date: 'fake date'
                }
            })

            // Expected
            const expectedResult = {

                "contentLength": 500,
                "dateAndTime": "fake date",
                "status": 200,
                "url": "https://google.com"
            }

            // Actual/Assertion
            const actualResults = await getAPIData(url);
            return expect(actualResults).toEqual(expectedResult);
        })

        it('should return error when api throws error', async () => {
            // Setup
            const url = 'https://google.com'

            axios.get.mockImplementation(() => {
                throw 'fake error'
            })

            // Expected
            const expectedResult = 'fake error'

            // Actual/Assertion
            const actualResults = await getAPIData(url);
            return expect(actualResults).toEqual(expectedResult);
        })
    })
})
