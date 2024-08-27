import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import "./FormComp.css";

const FormComp = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (e) => {
    setTitle(e.target.value);
  }

  const inputAmount = (e) => {
    setAmount(e.target.value);
  }

  useEffect(() => {
    const checkData = title.trim().length>0 && amount !== 0
    if (checkData) {
      setFormValid(true);
    }
  }, [title,amount])

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      id: uuidv4(),
      name: title,
      amount: Number(amount),
    };
    // console.log("FormComp : ",data);
    props.onAddItem(data);
    setTitle("");
    setAmount(0);
    setFormValid(false)
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="contain">
          <div className="form-control">
            <label>Input Type</label>
            <input type="text" placeholder="type" onChange={inputTitle} value={title}/>
          </div>
          <div className="form-control">
            <label>Cost</label>
            <input type="number" placeholder="+ is increase, - is decrease" onChange={inputAmount} value={amount} />
          </div>
          <div className="but">
            <button type="submit" disabled={!formValid} >Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
