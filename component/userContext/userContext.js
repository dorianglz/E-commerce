import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export function useUserContext(){
  return useContext(UserContext);
}

export function UserProvider({ children }) {

    const initialState = {
        name: 'Gonzalez Dorian',
        items: [],
    };
    const [user, setUser] = useState(initialState);


    function addItem(item) {
        setUser({
            ...user,
            items: [...user.items, item],
        });
    };

    function removeItem(item) {
        setUser({
            ...user,
            items: user.items.filter(i => i.id !== item.id),
        });
    };
    
    const valueProvider = {
        user,
        addItem,
        removeItem,
    };

    return (
        <UserContext.Provider value={valueProvider}>
            {children}
        </UserContext.Provider>
    );
};