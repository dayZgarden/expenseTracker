import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext)

    let sign;
    let color;

    if(transaction.amount < 0){
        sign = '-';
        color = 'minus';
    }
    if(transaction.amount > 0){
        sign = '+';
        color = 'plus'
    }

  return (
    <div>
      <li className={`${color}`}>
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    </div>
  );
};
