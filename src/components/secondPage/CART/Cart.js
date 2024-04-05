import axios from 'axios';
import React, { useEffect } from 'react'
import { useMyData } from '../../../Ecomcontext/Ecomcontext';
import { Link, useNavigate } from 'react-router-dom';
import CartLeftCard from './CartLeftCard';

const Cart = () => {
  const nav=useNavigate()
  const {token,cart,setcart,handleDeletecart,changes,setchanges, notifyerror}=useMyData()
  useEffect(() => {
    axios
      .get("https://ecommerec.onrender.com/getcart", {
        headers: {
          "x-token": token,
        },
      })
      .then((res) =>{ setcart(res.data)})
      .catch((err) => {
        notifyerror(err.response.data.message);
        return nav("/login");
      });

  }, []);
  
  if(!token){
    return nav('/login')
  }
  return (
    <div  className="column">
      <div  className="cartright">
      {cart.length == 0 ? (
          <h1 className="text-center">No items in cart</h1>
        ) :(cart.map((each) => {
          const { id, title, price, thumbnail } = each;
          return (
            <div key={each._id} className="Smallcart">
              <div className="divsamllCart">
                <div className="Smallcartleftside">
                  <img src={thumbnail} alt={id} className="cartimg" />
                </div>
                <div className="Smallcartrightside">
                  <p className="title"> {title}</p>
                  <p className="smallrightside">
                    <span className="span">Special price : </span>{" "}
                    <span>${price}</span>{" "}
                    <strike className="spans">$ 999</strike>
          
                  </p>
                  <select value={changes} onChange={(e)=>setchanges(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                  <div className="smallcartflex">
                    <Link to={`/delivery/${each._id}`} className="button">
                      processed to check
                    </Link>
                    <button onClick={()=>handleDeletecart(each._id)} >
                     remove
                    </button>  
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )
      }
      </div>
      <div className="cartflex">{cart.length >= 1 && <CartLeftCard />}</div>
    </div>
  )
}

export default Cart