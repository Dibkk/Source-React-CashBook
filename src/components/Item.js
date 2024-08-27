import PropTypes from 'prop-types'
import './Item.css';

function Item({name, amount}) {
    // Item(props)
    // let name = props.name;
    // let amount = props.amount;
    const status = amount < 0 ? "negative":"positive"
    const formatNum = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <li className={status}>{name} <span>{formatNum(amount.toFixed(2))}</span></li>
    );
}

Item.prototype={
    name:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}

export default Item;