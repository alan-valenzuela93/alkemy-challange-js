import React, { useReducer } from 'react';
import TransactionReducer from './TransactionReducer';
import TransactionContext from './TransactionContext';
import axios from 'axios';

const TransactionState = (props) => {
    const initialState = {
        transactions: [],
        selectedTransaction: null
    }

    const [state, dispatch] = useReducer(TransactionReducer, initialState);

    const getTransactions = async () => {
        const res = await axios.get('http://localhost:4000/api/transactions/');
        console.log(res);
        dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data
        });
    }

    const addTransaction = async () => {
        const req = await axios.post('')
    }

    const deleteTransaction = () => {}

    const modifyTransaction = () => {}

    return (
        <TransactionContext.Provider value= {{ //add here the functions that modifies the state
            transactions: state.transactions,
            selectedTransactions: state.selectedTransaction,
            getTransactions,
            addTransaction
        }}>
            {props.children}
        </TransactionContext.Provider>
    );
}

export default TransactionState;
