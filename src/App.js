import "./App.css";
import Head from "./components/Header";
import List from "./components/Transaction";
import FormComp from "./components/FormComp";
import DataContext from "./data/DataContext";
import ResultComp from "./components/ResultComp";
import { useContext, useEffect, useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const initdata = [
    { id: 1, name: "Food", amount: -1500 },
    { id: 2, name: "Rent", amount: -10000 },
    { id: 3, name: "Salary", amount: 50000 },
  ];

  const [Income, setIncome] = useState(0);
  const [Expense, setExpense] = useState(0);
  const [data, setData] = useState([]);
  const onAddItem = (newItem) => {
    setData((prev) => {
      let v = [newItem, ...prev];
      // console.log("App.js : ", v);
      return v;
    });
  };

  useEffect(() => {
    const am = data.map((items) => items.amount);
    const inc = am.filter((e) => e > 0).reduce((a, b) => (a += b), 0);
    const exp = am.filter((e) => e < 0).reduce((a, b) => (a += b), 0) * -1;
    setIncome(inc.toFixed(2));
    setExpense(exp.toFixed(2));
  }, [data]);

  const [showRe, setShowRe] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowRe(true);
      case "HIDE":
        return setShowRe(false);
      default:
        return state;
    }
  };

  const [result, dispatch] = useReducer(reducer, showRe);

  return (
    <DataContext.Provider
      value={{
        income: Income,
        expense: Expense,
      }}
    >
      <div className="container">
        <Head />
        {/* <FormComp onAddItem={onAddItem} />
        <List data={data} />
        <button onClick={() => dispatch({ type: "SHOW" })}>Show</button>
        <button onClick={() => dispatch({ type: "HIDE" })}>Hide</button>
        {showRe && <ResultComp />} */}
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Balance</Link>
              </li>
              <li>
                <Link to="/insert">Note</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<ResultComp />} />
              <Route path="/insert" element={[<FormComp onAddItem={onAddItem} />, <List data={data} />]} />
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
