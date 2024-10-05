const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./config/mongoose_connection.js'); // Ensure this filename is correct
const ownersRouter = require('./routes/ownersRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const productsRouter = require('./routes/productsRouter.js');

const app = express();

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Route setup
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/product", productsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
