import React from "react";
import { useUserContext } from "../component/userContext/userContext";

const Checkout = () => {
    
    const { user } = useUserContext();

    return (
        <div>
            <h1>Checkout</h1>
            {user.items.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.retailPrice}</p>
                </div>
            ))}
        </div>
    );
};

export default Checkout;