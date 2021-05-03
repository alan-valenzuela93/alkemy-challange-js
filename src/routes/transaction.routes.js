import { Router } from 'express';
import * as transactionCtrl from '../controllers/transaction.controller.js';

const router = Router();

router.post('/', transactionCtrl.addTransaction);
router.get('/', transactionCtrl.getAllTransactions);
router.get('/:id', transactionCtrl.getOneTransaction);
router.delete('/:id', transactionCtrl.deleteTransaction);
router.put('/:id', transactionCtrl.updateTransaction);

export default router;