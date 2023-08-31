const axios = require("axios");
const validator = require("jsonschema");
const searchSchema = require(`../test/data/searchSchema.json`);

describe(`API tests`, function () {
  test(`Welcome [GET] request should be 200`, async () => {
    const response = await axios.get(
      `https://www.asos.com/api/web/countrymetadata/v1/welcomeMessage?browseCountry=GB&deliveryCountry=BY&keyStoreDataversion=d1w1kwo-37&platform=desktop`,
    );
    await expect(response.status).toEqual(200);
  });

  test(`GET [Activities] should be valid to json schema`, async () => {
    const response = await axios.get(
      `https://www.asos.com/api/product/search/v2/suggestions?country=BE&keyStoreDataversion=d1w1kwo-37&lang=en-GB&limit=10&q=adida&store=ROE`,
    );
    const result = await validator.validate(response.data, searchSchema);
    await expect(response.status).toEqual(200);
    await expect(result.valid).toEqual(true);
  });
});
