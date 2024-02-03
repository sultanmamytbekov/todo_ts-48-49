import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
interface IElement {
  id: number;
  image: string;
  name: string;
  price: string;
  count: number;
}
const Home = () => {
  const [home, setHome] = useState(
    JSON.parse(localStorage.getItem("data") as string) || []
  );
  const navigate = useNavigate()
  function Obj(id:number){
    const data = JSON.parse(localStorage.getItem("data") as string) || []
    data.map((el:IElement) => {
        if(el.id === id){
            localStorage.setItem("obj", JSON.stringify(el))
        }
    })
  }
  function Order(el:IElement) {
   let data = JSON.parse(localStorage.getItem("order") as string) || []
   if(data.some((el1:IElement) =>el1.id === el.id)){
    return;
   }
   data.push(el)
   localStorage.setItem("order", JSON.stringify(data))
  }
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          <h1>MENU</h1>
          <div className="text">
            {home.map((el: IElement) => (
              <div className="block">
                <div>
                  <img src={el.image} alt="img" />
                  <div className="flex">
                    <h2>{el.name}</h2>
                    <button onClick={()=>{
                      Order(el)
                    }}>to order</button>
                  </div>
                  <div className="flex">
                    <h2>{el.price}$</h2>
                    <button onClick={() => {
                        Obj(el.id)
                        navigate('/edit')
                    }} className="editBtn">edit</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
