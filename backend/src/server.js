
import connectDB from './configuration/db.js';
import dotenv from 'dotenv';
import app from './App.js';

dotenv.config({
    path: './.env'
});


connectDB()
    //async method returning promise:
    .then(() => {
        app.on('error', (err) => {
            console.log(`err:`, err);
            throw err;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((error) => {
        console.error('Database connection error:', error);
    })