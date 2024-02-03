import React, { useState } from "react";
import './index.scss';
interface IElement {
  id: number;
  image: string;
  name: string;
  price: string;
  count: number;
}
const Order = () => {
  const [order, setOrder] = useState(
    JSON.parse(localStorage.getItem("order") as string) || []
  );
  function decrementOrder(id:number){
    let data = JSON.parse(localStorage.getItem("order") as string) || []
    data.map((el:IElement) => {
        if(el.id === id) {
            return {...el, count:el.count -= el.count === 1 ? 0 : 1};
        }
        return el
    })
    localStorage.setItem('order' , JSON.stringify(data));
    setOrder(data)
  }
  function incrementOrder(id:number){
    let data = JSON.parse(localStorage.getItem("order") as string) || []
    data.map((el:IElement) => {
        if(el.id === id) {
            return {...el, count:el.count += 1};
        }
        return el
    })
    localStorage.setItem('order' , JSON.stringify(data));
    setOrder(data)
  }
  function removeOrder(id:number){
    let data = JSON.parse(localStorage.getItem("order") as string) || []
    data = data.filter((el:IElement) => el.id !== id)
    localStorage.setItem('order' , JSON.stringify(data));
    setOrder(data)
  }
  let count = order.length !== 0 ? order.map((el:IElement) => +el.price * el.count).reduce((acc:number , el:number) => acc + el) : 0
  return (
    <div id="order">
      <div className="container">
        <div className="order">
          <h3>MY ORDERS</h3>
          <div className="text">
            {order.map((el: IElement) => (
              <div className="block">
                <div className="img">
                <img src={el.image} alt="" />
                <div>
                  <h1>{el.name}</h1>
                  <h2>{+el.price * el.count}$</h2>
                </div>
              </div>
                <div className="count">
                  <button onClick={() => {
                    removeOrder(el.id)
                  }}>delete order</button>
                  <div>
                    <button onClick={() => {
                        decrementOrder(el.id)
                    }}>-</button>
                    <h2>{el.count}x</h2>
                    <button onClick={() => {
                        incrementOrder(el.id)
                    }}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
            <h3>total:{count}</h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
