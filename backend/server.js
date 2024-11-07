const  express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const PORT = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});