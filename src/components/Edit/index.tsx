import React, { useState } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

interface IElement{
  id :number
  image:string
  name:string
  price:string
  count:number
}

const Edit = () => {
  const navigate = useNavigate()
  const [obj , setObj] = useState(
    JSON.parse(localStorage.getItem('obj') as string) || {}
  )
  const [img, setImg] = useState<any>(obj.image);
  const [name, setName] = useState<string>(obj.name);
  const [price, setPrice] = useState<string>(obj.price);
  function File(e: any) {
    let file = e.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  }
  function Edit() {
    if (img !== null && name.length !== 0 && price.length !== 0) {
        let data = JSON.parse(localStorage.getItem('data') as string) || [];
        data.map((el:IElement) => {
            if (el.id === obj.id){
                return {
                    ...el,
                    image:el.image = img,
                    name:el.name = name,
                    price:el.price = price,
                }
            }
            return el
        })
        localStorage.setItem('data' , JSON.stringify(data))
        setImg(null)
        setName('')
        setPrice('')
        navigate('/')
    }else{
      alert("Error")
    }
  }
  return (
    <div id="edit">
      <div className="container">
        <div className="edit">
          <h1>Edit</h1>
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
                <button onClick={Edit}>Edit</button>
              </form>
            </div>
            <div style={{
              background:img !== null ? `url(${img}) no-repeat center/cover` : '',
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

export default Edit;
