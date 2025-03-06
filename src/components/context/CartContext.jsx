import React, { useState } from "react";

export const CartContext = React.createContext();


export function CartContextProvider({children}){
    
    const [cartProducts, setCartProducts] = useState([]);


    return(
        <CartContext.Provider value={{setCartProducts, cartProducts}}>
            {children}
        </CartContext.Provider>
    );
}

