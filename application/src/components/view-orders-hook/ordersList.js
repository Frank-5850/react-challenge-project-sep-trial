import React from "react";

const OrdersList = (props) => {
  const { orders } = props;
  if (!props || !props.orders || !props.orders.length)
    return (
      <div className="empty-orders">
        <h2>There are no orders to display</h2>
      </div>
    );

  const timeFormatter = (date) => {
    const currentDate = new Date(date);
    const hour = currentDate.getHours();
    const minute =
      currentDate.getMinutes() < 10
        ? "0" + currentDate.getMinutes()
        : currentDate.getMinutes();
    const second =
      currentDate.getSeconds() < 10
        ? "0" + currentDate.getSeconds()
        : currentDate.getSeconds();
    const formattedTime = `${hour}:${minute}:${second}`;
    // console.log(formattedTime);
    return formattedTime;
  };

  return orders.map((order) => {
    const createdDate = new Date(order.createdAt);
    return (
      <div className="row view-order-container" key={order._id}>
        <div className="col-md-4 view-order-left-col p-3">
          <h2>{order.order_item}</h2>
          <p>Ordered by: {order.ordered_by || ""}</p>
        </div>
        <div className="col-md-4 d-flex view-order-middle-col">
          <p>Order placed at {timeFormatter(createdDate)}</p>
          <p>Quantity: {order.quantity}</p>
        </div>
        <div className="col-md-4 view-order-right-col">
          <button className="btn btn-success">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  });
};

export default OrdersList;
