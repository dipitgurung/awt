import { PrismaClient } from './generated/prisma/index.js'
import express from 'express';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5500', //live server of vs code
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))

const prisma = new PrismaClient();

app.get('/api/quotes', async (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // fetch data and print result in json here
    try {
        const allQuotes = await prisma.quote.findMany();
        res.json(allQuotes);
    }
    catch (error) {
        res.json({
            message: 'Failed to get quotes from database..',
            error: error.message,
        })
    }
})

app.post('/api/quotes', async (req, res) => {
    // res.json(req.body);
    try {
        const { author, description, date } = req.body;
        const newQuote = await prisma.quote.create({
            data: {
                author,          // String
                description,     // String
                dateTime: date ? new Date(date) : null  // Convert to DateTime
            }
        });
        res.json({
            status: 201,
            quote: newQuote,
        })
    }
    catch (error) {
        res.json({
            message: 'Failed to add quote to the database..',
            requestBody: req.body,
            error: error.message,
        })
    }
})

app.listen(3030, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3030);
})