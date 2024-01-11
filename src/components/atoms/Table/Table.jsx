import React from 'react';
import classes from './Table.module.scss';
const Table = ({data}) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Status</th>
          <th>Transaction ID</th>
          <th>Refund Date</th>
          <th>Order Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.status}</td>
            <td>{order.transactionId}</td>
            <td>{order.refundDate}</td>
            <td>{order.orderAmount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;