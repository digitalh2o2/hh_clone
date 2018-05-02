module.exports = {
  hackerHuntPromise() {
    const response = fetch("https://hackerhunt.co/api/daily/0", {
      method: "GET",
      headers: {
        Accept: "applicaiton/json"
      }
    });
    return response;
  }
};
