import { useEffect  } from "react";
import "./Product.css";
import { fetchAsync } from "./productSlice";
import {useDispatch, useSelector} from 'react-redux'
import {addAsync} from '../cart/cartSlice'
export default function Products() {

  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  
  useEffect(()=>{
    dispatch(fetchAsync())
  },[])


  return (
    <> <h2 align="center">Products</h2>
    <div className="products">
     
      {
        products.map((product)=>(
          <div className="card" key={product.id}>
          <img src={product.image} alt={product.title} style={{width:"100%",height:400}} />
          <h1 className="title">{product.title}</h1>
          <p className="price">${product.price}</p>
          <p className="desc">{product.description}</p>
          <p>
            <button onClick={()=>dispatch(addAsync(product))}>Add to Cart</button>
          </p>
        </div>
        ))
      }
   
    </div>
    </>
  );
}
