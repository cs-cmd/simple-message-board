import { Router } from "express";
import Message from "../models/message.js";
import { messages } from "./index.js";

const router = Router();

router.get('/', function(req, res, next) {
  res.render('new.ejs');
});

router.post('/', async function(req, res, next) {
  const originalPoster = req.body.original_poster;
  const text = req.body.text;

  messages.push({ original_poster: originalPoster, text, date_posted: new Date()});
  // const message = new Message({ original_poster: originalPoster, text });
  // await message.save();

  console.log('posted!');
  res.redirect('/');
})


// async function postMessage() {
//   async function(req, res, next) {
//     const originalPoster = req.original_poster;
//     const text = req.text;
  
//     console.log(originalPoster);
//     console.log(text);
  
//     const message = new Message({ original_poster: originalPoster, text });
//     await message.save();
  
//     console.log('posted!');
// }


export { router };