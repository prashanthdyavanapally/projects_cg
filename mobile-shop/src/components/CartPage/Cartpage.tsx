import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SingleProduct } from "../../features/productSlice";
import { clearCart, removeProductFromCart } from "../../features/cartSlice";
import { RootState } from "../../redux/store";
import styles from "./CartPage.module.css";

export const Cartpage: React.FC = () => {
  const cartData = useSelector((state: RootState) => state.cartReducer.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cartCount=cartData.length;

  const handleRemoveProduct = (e: SingleProduct) => {
    dispatch(removeProductFromCart(e));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className={styles.cartPageContainer}>
        {cartData.length ? (
          <button
            className={styles.clearCart}
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
        ) : null}

        <p className={styles.shopMore} onClick={() => navigate("/products")}>
          Shop Here-{">>"}
        </p>
        {cartData?.map((e, id) => (
          <div key={e.id} className={styles.productdiv}>
            <img src={e.image} alt="" />
            <div>
              <h5>{e.model}</h5>
              <p>{e.variant}</p>
              <h6>₹ {e.price}</h6>
            </div>
            <button onClick={() => handleRemoveProduct(e)}>Remove</button>
          </div>
        ))}
      </div>
      {cartData.length > 0 ? (
        <div className={styles.totalPriceContainer}>
          <div>
            {cartData.map((e, id) => (
              <>
                <div className={styles.checkoutModel}>
                  <p>{e.model}</p>
                </div>
                <div className={styles.checkoutPrice}>
                  <p>{e.price}</p>
                </div>
              </>
            ))}
          </div>
          <hr />
          <h5 className={styles.total}>Total:</h5>
          <h5 className={styles.totalPrice}>
            {" "}
            {cartData.reduce((total, item) => total + item.price, 0)}{" "}
          </h5>
          <hr />
          <button className={styles.checkout}>Checkout</button>
        </div>
      ) : (
        <h3 className={styles.emptyCartText}>Your Cart is Empty!!!</h3>
      )}
    </>
  );
};
