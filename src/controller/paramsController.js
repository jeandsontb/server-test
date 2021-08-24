const createClient = (req, res) => {
  res.send('Novo cliente')
}

const updateClient = (req, res) => {
  res.send('Mudar cliente')
}


module.exports = {
  createClient,
  updateClient
}