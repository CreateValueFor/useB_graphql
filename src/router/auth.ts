import express from 'express'

const router = express.Router()

router.post('/login', (req, res, next) => {
  return res.json({
    code: 200,
    message: 'success',
  })
})

export default router
