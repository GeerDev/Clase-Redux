import { useEffect } from 'react';
import Product from './Product/Product'
import { useDispatch } from "react-redux";
import { getAll, reset } from "../../../features/products/productsSlice";
import { useSelector } from "react-redux";

const Products = () => {
    const { isLoading } = useSelector((state) => state.products);
    const dispatch = useDispatch();
  
     const getPostsAndReset = async () => {
      await dispatch(getAll());
      dispatch(reset());
   
     };
     useEffect(() => {
       getPostsAndReset();
     }, []);
  
    if (isLoading) {
      return <h1>Cargando productos...</h1>;
    }
  
    return (
      <div>
          <h1>Products</h1>
          <Product/>
      </div>
    )
  }
  
  export default Products