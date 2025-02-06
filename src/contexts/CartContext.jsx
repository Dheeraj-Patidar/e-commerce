import React,{createContext,useState,useContext} from 'react'

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cart,setCart]=useState([]);

    const addToCart=(product)=>{
        setCart((prevCart)=>{
            const existingProductIndex=prevCart.findIndex(item=>item.id===product.id)
            if(existingProductIndex !==-1){
                const updatedCart=[...prevCart];
                updatedCart[existingProductIndex].quantity +=1;
                return updatedCart;
            }
            return [...prevCart,{...product,quantity:1}];

        });

    };
    const removeFromCart=(productid)=>{
        setCart((prevCart)=>{
            const updatedCart = prevCart.filter(item=>item.id!==productid)
            return updatedCart;
        });
    }
    const updateQuantity=(productid,quantity)=>{
        setCart((prevCart)=>{
            const updatedCart=prevCart.map(item=>item.id===productid?{...item,quantity:Math.max(quantity,1)}:item);
            return updatedCart;
        });
    };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,updateQuantity}}>
        {children}
        </CartContext.Provider>
    )

};

export const useCart=()=>useContext(CartContext);