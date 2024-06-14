const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

const user = {
  id: 1,
  username: 'john',
  email: 'aaajohn@doe.com',
  name: 'John Doe'
};

router.get('/me', (req, res) => {
  return res.json({
    data: {
      user
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // query db.
  console.log('data : ', { email, password });
  if (email === 'admin@admin.com' && password === '999999999') {
    return res.json({
      data: {
        user,
        token: 'THIS_IS_TOKEN'
      }
    });
  } else {
    return res.status(401).json({
      message: 'Invalid Password'
    });
  }
});

app.use('/api', router);

app.listen(process.env.PORT, () => {
  console.log(`Mock API start on port ${process.env.PORT}`);
});
