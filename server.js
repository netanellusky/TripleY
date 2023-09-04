import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router  from './routes/index.js'
import errorHandler from './middlewares/errorHandler.js';

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());


app.use('/api', router)

app.use(errorHandler);

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))