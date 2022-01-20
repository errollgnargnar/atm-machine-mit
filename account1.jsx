// this keeps a running total of deposits and withdrawals

const ATMDeposit = ({ onChange, isDeposit }) => {
  const choice = ['Deposit', 'Cash Back'];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit"></input>
    </label>
  );
};

const Account = () => {
  const [accountState, setAccountState] = React.useState(0);
  const [transactionState, setTransactionState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setTransactionState(event.target.value);
  };
  const handleSubmit = event => {
        event.preventDefault();

    if(!isDeposit && Number(transactionState) > Number(accountState)) alert('not enough funds')
    else {
      let newTotal = isDeposit ? Number(accountState) + Number(transactionState) : Number(accountState) - Number(transactionState);
      setAccountState(newTotal);
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Account Balance {accountState}</h2>
      <button onClick={(e) => {
        e.preventDefault();
        setIsDeposit(true);
      }}>Deposit</button>
      <button onClick={(e) => {
        e.preventDefault();
        setIsDeposit(false);
      }}>Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
