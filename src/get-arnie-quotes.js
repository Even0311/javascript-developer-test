const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  return Promise.all(
    urls.map(async (url) => {
      try {
        const response = await httpGet(url);
        const theKey = response.status === 200 ? "Arnie Quote" : "FAILURE";
        return { [theKey]: JSON.parse(response?.body).message };
      }
      catch (err) {
        // deal with error
      }
    })

  );
};

module.exports = {
  getArnieQuotes,
};