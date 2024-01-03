import { Router } from 'express';
const router = Router();

const messages = [
  {
    text: 'Hello world!',
    original_poster: 'John',
    date_posted: new Date(),
  },
  {
    text: 'Hey!',
    original_poster: 'Paul',
    date_posted: new Date(),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

export { router, messages };