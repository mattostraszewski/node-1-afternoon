const products = require('../products.json')

module.exports = {
  getProducts: (req, res) => {
    const { price } = req.query
    if (price) {
      const priceOfProducts = products.filter(elem => elem.price >= +price)
      return res.status(200).send(priceOfProducts);
    } else {
      return res.status(200).send(products);
    }
  }
}


