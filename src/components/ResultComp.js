import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ResultComp.css'

const ResultComp = () => {
    const result = useContext(DataContext)
    const { income, expense } = useContext(DataContext)
    const formatNum = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
        <section>
        <div className="main-container">
            {/* <DataContext.Consumer>
                {context => <p>Balance : {context.income + context.expense}</p>}
            </DataContext.Consumer> */}
            <p className="result-container income">Income : {formatNum(income)}</p>
            <p className="result-container expense">Expense : {formatNum(expense)}</p>
        </div>
        <div>
            <p className="result-container balance">Balance : {formatNum((result.income - result.expense).toFixed(2))}</p>
        </div>
        </section>
    )
}

export default ResultComp