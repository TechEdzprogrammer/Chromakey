import { useContext} from "react";
import { CartContext } from "../context/CartContext";
import styles from '../stylesheets/cartPage.module.css';
import NavBar from "../SubComponents/NavBar";
import Footer from "../SubComponents/Footer";
import { Link } from "react-router-dom";

function CartPage() {
  const {cartProducts, setCartProducts} = useContext(CartContext);
  console.log(cartProducts);
  return(
    <>
        <NavBar/>
        <section className={styles.cartSection}>
        <h3 className={styles.heading}><strong>Your Cart</strong></h3>
        {cartProducts.map((e, index) => {
          return (
              <div key={index} className={styles.productDiv}>
                  <Link to={`/product-details/${e.productDetails.id}`}><img src={e.productDetails.keyboard_img_url} alt="keyboard image" width={200} /></Link>
                  <div className={styles.details}>
                      <h6>Product</h6>
                      <p>{e.productDetails.keyboard_name}</p>
                  </div>
                  <div className={styles.details}>
                      <h6>Price</h6>
                      <p>₱{e.productDetails.keyboard_price * e.quantity}</p>
                  </div>  
                  <div className={styles.details}>
                      <h6>Quantity</h6>
                      <p>{e.quantity}</p>
                  </div>                   
                  <Link className={styles.link} to={`/checkoutPage/${e.productDetails.id}/${e.quantity}`}>
                      <button className={`btn btn-warning ${styles.checkoutbutton}`}>Checkout</button>
                  </Link>
                  <button className={`btn btn-danger ${styles.deletebutton}`} 
                      onClick={() => setCartProducts(cartProducts.filter(item => item.productDetails.id !== e.productDetails.id))}>
                      Delete
                  </button>
              </div>
          );
        })}

        </section>   
        <Footer/>
    </>
  )
}

export default CartPage;
