import { useDispatch, useSelector } from "react-redux";
import { like } from "../../../../features/products/productsSlice";
import "antd/dist/antd.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Product = () => {
  const { products } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  console.log("Productos", products)
  console.log("User", user)

  const dispatch = useDispatch();

  const product = products?.map((product) => {

    const isAlreadyLiked = product.likes?.includes(user?.user._id);

    return (
      <div className="Product" key={product._id}>
        <p>{product.name}</p>
        <span className="wish">Wish list: {product.likes?.length}</span>
        
        {isAlreadyLiked ? (
          <HeartFilled  onClick={  isAlreadyLiked  ? () => console.log("dislike")  : () => dispatch(like(product._id))  } />
        ) : (
          <HeartOutlined onClick={  isAlreadyLiked  ? () => console.log("dislike")  : () => dispatch(like(product._id))  } />
        )}

        <br />
        <br />
      </div>
    );
  });
  return <div>{product}</div>;
};


export default Product;