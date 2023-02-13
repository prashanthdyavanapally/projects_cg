import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("Products :", products);
  return (
    <div className="ui grid container">
      {products.map((e) => (
        <div className="four wide column" key={e.id}>
          <Link to={`/product/${e.id}`}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={e.image} alt={e.title} />
                </div>
                <div className="content">
                  <div className="header">{e.title}</div>
                  <div className="meta price">₹ {e.price}</div>
                  <div className="meta">{e.category}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
