import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js'; 

const Transactions = sequelize.define('transactions',{
        id: {
            type: Sequelize.FLOAT,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: {
            type: Sequelize.FLOAT,
        },
        concept: {
            type: Sequelize.TEXT,
        },
        date_added: {
            type: Sequelize.DATE,
        },
        transaction_type: { 
            type: Sequelize.TEXT //Income or Expense
        }

    }, {
        timestamps: false
    });

export default Transactions;