import React, { useContext } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import IconBtn from "../reusable/iconBtn";
import styles from "./actionMenu.module.css";
import Link from "next/link";
import { UserContext } from "../userContext/userContext";

const ActionMenu = () => {

    const { user } = useContext(UserContext);

    const getTotalPrice = () => {
        if (user.items.length === 0) return 0;

        let totalPrice = 0;
        user.items.forEach(item => {
            totalPrice += item.retailPrice;
        });
        return totalPrice;
    }

    return (
        <div className={styles.container}>
            <IconBtn icon={<FiSearch size={"20px"}/>} onClick={() => {}}/>
            <Link href="/checkout" passHref>
                <IconBtn text={getTotalPrice() + '€'} icon={<FiShoppingCart size={"20px"}/>}/>
            </Link>
        </div>
    );
};

export default ActionMenu;