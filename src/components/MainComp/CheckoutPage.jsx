import { useEffect, useState} from "react";
import NavBar from "../SubComponents/NavBar";
import { useParams } from "react-router-dom";
import styles from '../stylesheets/checkoutPage.module.css';
import Footer from "../SubComponents/Footer";
import { Link } from "react-router-dom";

function CheckoutPage(){
    const {id, quantity} = useParams();
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [productQuantity, setProductQuantity] = useState(quantity);
    
    useEffect(()=>{
        async function getProduct(){
            const product = await fetch(`http://mechanicalkeyboardapi.mooo.com/keyboard_details?id=${id}`);
            const productData = await product.json();
            setSelectedProduct(productData);
        }
        getProduct();
    });

    function placeOrder(){
        if(productQuantity === 0){
            window.alert('Insert number of quantity');
        }
        else{
            window.alert('Order is place');
        }
    }

    function adjustQuantity(e){
        if(e.target.value === "+"){
            setProductQuantity(parseInt(productQuantity)+1);
        }
        else{
            if(productQuantity !== 0){
                setProductQuantity(parseInt(productQuantity)-1);
            }
        }
    }
    
    return(
        <>
            <NavBar/>
            <section className={styles.productContainer}>
                
                <h3 className={styles.heading}><strong>Checkout Product</strong></h3>
                <div className={styles.productDiv}> 
                    <Link to={`/product-details/${selectedProduct.id}`}><img src={selectedProduct.keyboard_img_url} alt="keyboard" width={200} /></Link>
                    <div className={styles.details}>
                        <h6>Product</h6>
                        <p>{selectedProduct.keyboard_name}</p>
                    </div>
                    <div className={styles.details}>
                        <h6>Price</h6>
                        <p>₱{selectedProduct.keyboard_price}</p>
                    </div>
                    <div className={styles.quantity}>
                        <h6>Quantity</h6>
                        <input type="text" onChange={adjustQuantity} value={productQuantity}/>
                        <button value={"+"} onClick={adjustQuantity} className={` ${styles.quantityAddButton}`}>+</button>
                        <button value ={"-"} onClick={adjustQuantity} className={` ${styles.quantitySubButton}`}>-</button>
                    </div>
                    
                    <div className={styles.details}>
                        <h6>Total Price</h6>
                        <p>₱{selectedProduct.keyboard_price * productQuantity}.00</p>
                    </div>
                    <button className={`btn btn-warning ${styles.placeOrder}`} onClick={placeOrder}>Place Order</button>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default CheckoutPage;