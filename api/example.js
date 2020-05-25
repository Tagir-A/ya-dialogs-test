// module.exports = (req, res) => {
//   res.send('yolo')
// }
module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}