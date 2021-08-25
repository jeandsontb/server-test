const list = (req, res) => {
  res.render('home', {
    time: 10,
    li: [
      'Jeandson',
      'Tenorio',
      'Braz'
    ],
    animals: [
      { name: 'koster' },
      { name: 'Lion' },
      { name: 'Cebola' },
      { name: 'Dragon' }
    ]
  });  
}

const create = (req, res) => {
  res.send('Page Home')
}

const calc = (req, res) => {
  const {num1, num2} = req.query;

  if(num1 && num2) {
    const sum = parseFloat(num1) + parseFloat(num2);
    res.render('calc', { sum });
  } else {
    res.render('error');
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