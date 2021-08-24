const list = (req, res) => {
  res.send('Home')
}

const create = (req, res) => {
  res.send('Page Home')
}

const calc = (req, res) => {
  const {num1, num2} = req.query;

  if(num1 && num2) {
    const sum = parseFloat(num1) + parseFloat(num2);
    res.send('A soma é '+sum);
  } else {
    res.send('calculadora');
  }
}

const verify = (req, res) => {
  const { number } = req.params

  const verifyNumber = number%2 === 0 ? 'Par' : 'Impar';

  res.send('O número inserido é '+verifyNumber);
}

module.exports = {
  list,
  create,
  calc,
  verify
}