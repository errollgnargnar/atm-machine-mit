
const ATMDeposit = ({onChange, handleSubmit}) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" onClick={handleSubmit}></input>
    </label>
  );
};

const Account = () => {
  const [transactionState, setTransactionState] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  let status = `Account Balance $ ${totalState}`;

  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setTransactionState(Number(event.target.value));
  };
  const handleSubmit = event => {
    setTotalState(totalState + transactionState);///will rerender
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <ATMDeposit onChange={handleChange} handleSubmit={handleSubmit}> Deposit</ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
