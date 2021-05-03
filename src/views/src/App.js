import "bootswatch/dist/lux/bootstrap.min.css";
import Navigation from './components/Navigation';
import Balance from './components/Balance';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import TransactionState from './context/TransactionState';


function App() {
  return (
    <TransactionState>
      <div className="Apps">
      <Navigation />
      <div className='container mt-4'>
        <div className='row mt-3'>
          <div className='col-sm'>
            <AddTransaction />
          </div>
        </div>
        <div className = 'row mt-3'>
          <TransactionsList />
        </div>
        <div className='col-sm mt-4'>
            <Balance />
          </div>
      </div>
    </div>

    </TransactionState>
    
  );
}

export default App;