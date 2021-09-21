const axios = require("axios");

module.exports = {
  find: (req, res) => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" + req.params.searchterm
      )
      .then((response) => {
        res.json(response.data.items);
      });
  },
};
