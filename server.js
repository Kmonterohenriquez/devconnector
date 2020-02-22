const express = require('Express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db')

// Connect Database 
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
