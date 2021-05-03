import Transactions from '../models/transaction.js';

export async function getAllTransactions(req, res) {
    try {
        const transactions = await Transactions.findAll();
        res.json({
            data: transactions
        });
    } catch (e) {
        console.log(e);
    }
}

export async function getOneTransaction(req, res) {
    const { id } = req.params;
    const transaction = await Transactions.findOne({
        where: {
            id
        }
    });
    res.json(transaction)
}

export async function addTransaction(req, res) {
    const { amount, concept, added, transaction_type } = req.body
    try {
        let newTransaction = await Transactions.create({
            amount,
            concept,
            added,
            transaction_type
        }, {
            fields: ['amount', 'concept', 'date_added', 'transaction_type']
        });
        if (newTransaction) {
            return res.json({
                message: 'operation added succesfully',
                data: newTransaction
            });
        }       
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });        
    }
}

export async function deleteTransaction(req, res) {
    try {
        const { id } = req.params;
        const transaction = await Transactions.destroy({
            where: {
                id
            }
        });
        res.json({
            message: 'operation deleted successfully'
        });
    } catch (e) {
        console.log(e);
    }
}

export async function updateTransaction(req, res) {
    const { id } = req.params;
    const { amount, concept, date_added } = req.body;

    try {

        const transactions = await Transactions.findAll({
            attributes: ['id', 'amount', 'concept', 'date_added'],
            where: { id }
        });

        if (transactions.length > 0) {
            transactions.forEach(async transaction => {
                await transaction.update({
                    amount,
                    concept,
                    date_added,
                });
            });
        }

        return res.json({
            message: 'operation updated successfully',
            transaction
        });
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        });
    }
}