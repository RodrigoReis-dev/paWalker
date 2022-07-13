const express = require('express')

const db = require('../db/reviews.db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getReviews()
    .then(results => {
      res.json({ reviews: results.map(review => review.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router