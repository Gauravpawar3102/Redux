import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators } from './state/index';
function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      {account}
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(5)}>Deposit</button>
    </div>
  );
}

export default App;
