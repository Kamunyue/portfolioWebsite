const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', async (req, res) => {
  try {
    const potentialClient ={
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };
      
    console.log('Request body:', potentialClient);

    if (!potentialClient.name || !potentialClient.email || !potentialClient.message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const contact = new Contact({ potentialClient });
    await contact.save();
    res.status(201).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//BLACKBOX AI ALT CODE
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const { body, validationResult } = require('express-validator');
// require('dotenv').config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Define the contact schema
// const contactSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   message: { type: String, required: true },
//   date: { type: Date, default: Date.now },
// });

// // Create the Contact model
// const Contact = mongoose.model('Contact', contactSchema);

// // POST endpoint to handle contact form submissions
// app.post('/api/contact', [
//   // Validate and sanitize input
//   body('name').notEmpty().withMessage('Name is required'),
//   body('email').isEmail().withMessage('Valid email is required'),
//   body('message').notEmpty().withMessage('Message is required'),
// ], async (req, res) => {
//   // Check for validation errors
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   try {
//     const { name, email, message } = req.body;

//     // Create a new contact document
//     const contact = new Contact({ name, email, message });
//     await contact.save();

//     res.status(201).json({ message: 'Message saved successfully' });
//   } catch (error) {
//     console.error('Error saving contact:', error.message);
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });