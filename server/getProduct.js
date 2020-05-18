const products = require('../products.json')

module.exports = {
  getId: (req, res) => {
    const { id } = req.params
    const productIds = products.find(elem => elem.id === +id)

    if (!productIds) {
      return res.status(500).send('Item not in list')
    } else {
      return res.status(200).send(productIds)
    }
  }
}