import Item from "./Item";
import './Transaction.css'

function List({data}) {
  // uuid could help with unique key
  // const initdata = [
  //   { id:1, name:"Food", amount:-1500 },
  //   { id:2, name:"Rent", amount:-10000 },
  //   { id:3, name:"Salary", amount:50000 },
  //   { id:4, name:"Transport", amount:-2000 },
  //   { id:5, name:"Salary", amount:400000 },
  // ]
  return (
    <ul className="item-list">
      {data.map((e) => {
        return (
          // Spread Operartor
          <Item {...e} key={e.id} />
          
          // <Item name={e.name} amount={e.amount} key={e.id} />
          )
      })}
    </ul>
  );
}

export default List;
