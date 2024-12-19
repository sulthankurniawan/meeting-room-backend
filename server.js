const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const meetingRoutes = require('./routes/meetingRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', meetingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
