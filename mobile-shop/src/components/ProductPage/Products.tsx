import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import { RootState } from "../../redux/store";
import { Carousell } from "../HomePage/Carousel/Carousel";
import styles from "./Products.module.css";
import {
  filterBy10To15,
  filterBy15To20,
  filterBy5To10,
  filterBySelect,
  SingleProduct,
  sortByRelevance,
  sortHighToLow,
  sortLowToHigh,
} from "../../features/productSlice";

const Products: React.FC = () => {
  const allProducts = useSelector(
    (state: RootState) => state.productReducer.products
  );

  const dispatch = useDispatch();

  const handleSort: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.target.value;
    if (value === "lowtohigh") {
      dispatch(sortLowToHigh());
    } else if (value === "hightolow") {
      dispatch(sortHighToLow());
    } else {
      dispatch(sortByRelevance());
    }
  };

  const handleFilter: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.target.value;
    // console.log(value);
    if (value === "5to10") {
      dispatch(filterBy5To10());
    } else if (value === "10to15") {
      dispatch(filterBy10To15());
    } else if (value === "15to20") {
      dispatch(filterBy15To20());
    } else {
      dispatch(filterBySelect());
    }
  };

  const handleAddToCart = (e: SingleProduct) => {
    dispatch(addToCart(e));
    alert("Product added to cart successfully!");
  };

  return (
    <>
      <Carousell />
      <div style={{ width: "80%", margin: "auto" }}>
        <div className={styles.selectTag}>
          <label>Filter By:</label>
          {"  "}
          <select name="filter" id="filter" onChange={handleFilter}>
            <option value="select">select</option>
            <option value="5to10">5% - 10%</option>
            <option value="10to15">10% - 15%</option>
            <option value="15to20">15% - 20%</option>
          </select>
        </div>
        <div className={styles.selectTag}>
          <label>Sort By:</label>
          {"  "}
          <select name="sort" id="sort" onChange={handleSort}>
            <option value="relevance">Relevance</option>
            <option value="lowtohigh">Price - Low to High</option>
            <option value="hightolow">Price - High to Low</option>
          </select>
        </div>
        <div className={styles.productsContainer}>
          {allProducts.map((e, id) => (
            <div key={e.id} className={styles.productDiv}>
              <img src={e.image} alt="" />
              <h5>{e.model}</h5>
              <p>{e.variant}</p>
              <p style={{ color: "red", fontWeight: "bold" }}>
                {e.discount}% off
              </p>
              <h6>₹ {e.price}</h6>
              <button onClick={() => handleAddToCart(e)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
