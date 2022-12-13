
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from './routes/user.js';

const social = express();

social.use(express.json({ limit: '30mb', extended: true }))
social.use(express.urlencoded({ limit: '30mb', extended: true }))
social.use(cors());


// --------------------------deployment------------------------------
const __dirname = path.resolve();
social.use('/posts',  require(path.join(__dirname, './routes/posts.js')));
social.use("/user",  require(path.join(__dirname, './routes/user.js')));

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "../client/build"))),
  app.get("*", function (_, res) {
    res.sendFile(
      path.join(__dirname, "../client/build/index.html"),
      function (err) {
        if (err) {
          res.status(500).send(err);
        }
      }
    );
  });
}

const CONNECTION_URL = process.env.CONNECTION_URL || 'mongodb+srv://pranay:pranay2329@full-stack-projects.zjd6u.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => social.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);