import "./Cart.css";
import {useDispatch, useSelector} from 'react-redux'
import { deleteAsync, updateAsync } from "./cartSlice";

export default function Products() {

  const dispatch = useDispatch()
  const items = useSelector(state=>state.cart.items)
  
  const handelChange = (e,id) =>{
    console.log(e.target.value);
    dispatch(updateAsync({id,change:{quantity:+e.target.value}}))
  }

  return (
    <div >
      <h2 align="center">Shopping Cart</h2>
      {
        items.map((item)=>(
          <div className="cart" key={item.id}>
          <ul>
            <li className="item">
              <img src={item.image} alt={item.title}/>
              <div className="item-details">
                <span className="item-name">{item.title}</span>
             
                <div className="quantity">
                  Quantity: 
                  <select value={item.quantity} onChange={(e)=>handelChange(e,item.id)}>
                    <option value={1} >1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              <span className="price">${item.price}</span>
              </div>
                <button onClick={()=>dispatch(deleteAsync(item.id))}>Remove</button>
            </li>
          </ul>
         
        </div>
        ))
      }
     <div className="total">
            Total: <span className="total-price">$ {Math.round(items.reduce((acc,item)=>item.price * item.quantity + acc,0))}</span>
          </div>
    </div>
  );
}
