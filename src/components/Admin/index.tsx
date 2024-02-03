import React, { useState } from "react";
import "./index.scss";

interface IElement{
  id :number
  image:string
  name:string
  price:string
  count:number
}

const Admin = () => {
  const [img, setImg] = useState<any>(null);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  function File(e: any) {
    let file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  }
  function addProduct() {
    if (img !== null && name.length !== 0 && price.length !== 0) {
      let Obj:IElement = {
        id: Date.now(),
        image: img,
        name: name,
        price: price,
        count: 1,
      };
      let data = JSON.parse(localStorage.getItem("data") as string) || [];
      data.push(Obj);
      localStorage.setItem("data", JSON.stringify(data));
      setImg(null)
      setName('')
      setPrice('')
    }else{
      alert("Error")
    }
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <h1>CREATE PRODUCT</h1>
          <div className="home">
            <div className="text">
              <form
                onSubmit={(e: any) => {
                  e.preventDefault();
                }}
                className="from"
              >
                <input
                  onChange={File}
                  className="file"
                  type="file"
                />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="food name"
                />
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  placeholder="price"
                />
                <button onClick={addProduct}>create</button>
              </form>
            </div>
            <div style={{
              background:img !== null ? `url(${img}) no-repeat center/cover` : ''
            }} className="block">
              <h1 style={{
                display:img !== null ? 'none' : 'block',
              }}>place for a photo</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
