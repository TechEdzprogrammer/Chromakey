import { useContext, useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import Footer from "../SubComponents/Footer";
import styles from '../stylesheets/productDetails.module.css';
import NavBar from "../SubComponents/NavBar";
import { CartContext } from "../context/CartContext";



function ProductDetails(){
    
    const {id} = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const {setCartProducts} = useContext(CartContext);
    useEffect(() => {
        async function getProductDetails(){
            const keyboardDetails = await fetch(`http://mechanicalkeyboardapi.mooo.com/keyboard_details?id=${id}`);
            const keyboardData = await keyboardDetails.json();
            setProductDetails(keyboardData);
        }

        getProductDetails();

    })
    
    function addToCart() {
        setCartProducts((prevCart) => {
            const existingItem = prevCart.find((item) => item.productDetails.id === productDetails.id);
    
            if (existingItem) {
                
                return prevCart.map((item) =>
                    item.productDetails.id === productDetails.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                
                return [...prevCart, { productDetails, quantity: 1 }];
            }
        });
    
        window.alert('Added to Cart');
    }
    
    return(
        <>
            <NavBar/>
               <section className={styles.productDetailsContainer}>
                    <div className={styles.productDetails}>
                        <div className={styles.productDetailsImg}><img src={productDetails.keyboard_img_url} alt="keyboard image" width={700} /></div>
                        <h2>{productDetails.keyboard_name}</h2>
                        <div className={styles.details}>
                            <h4>Price: ₱{productDetails.keyboard_price}</h4>
                            <h4>Product Rating: {productDetails.keyboard_rating}</h4>
                            <h4>Product Description</h4>
                            <p>{productDetails.keyboard_description}</p>
                        
                        
                            <h4>Technical Specifications</h4>
                            <ul>
                                <li>{productDetails.keyboard_specs_1}</li>
                                <li>{productDetails.keyboard_specs_2}</li>
                                <li>{productDetails.keyboard_specs_3}</li>
                            </ul>
                        </div>

                        <div className={styles.reviews} > 
                            <h5>Product Review{productDetails.keyboard_rating}k reviews</h5>
                            <p>{productDetails.keyboard_review}</p>
                        </div>

                        <div className={styles.button} > 
                                <Link to={`/checkoutPage/${productDetails.id}/${1}`}><button className="btn btn-primary">Buy Now</button></Link>
                                <button onClick={addToCart} className="btn btn-warning" >Add to Cart</button>
                        </div>
                    </div>
               </section>
            <Footer/>
        </>
    )
}

export default ProductDetails;