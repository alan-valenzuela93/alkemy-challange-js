import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importing routes
import transactionRoutes from './routes/transaction.routes.js'

//settings
const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), () => {
    console.log('Server on port 4000');
});

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false})); // 

//routes
app.use('/api/transactions', transactionRoutes);

export default app;