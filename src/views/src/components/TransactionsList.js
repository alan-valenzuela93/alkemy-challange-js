import React, { useEffect } from 'react';
import {useContext} from 'react';
import TransactionContext from '../context/TransactionContext';

const TransactionsList = () => {
    const { getTransactions } = useContext(TransactionContext);

    useEffect(() => {
        getTransactions();
    }, [])

    return (
        <div>
            Transaction List
        </div>
    )
}

export default TransactionsList;