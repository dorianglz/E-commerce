import React from 'react';
import styles from './itemShop.module.css';
import Image from 'next/image';
import { FiPlus } from "react-icons/fi";
import { useUserContext } from '../userContext/userContext';

const ItemShop = ({ item }) => {
    const shoe = item;

    const { addItem } = useUserContext();

    function addToCard() {
        addItem(shoe);
//        console.log(shoe)
    }

    return (
        <div className={styles.container} key={shoe.id}>
            <div className={styles.imgContainer}>
                {shoe.media.imageUrl &&
                <Image src={shoe.media.imageUrl} alt={shoe.title} objectFit="contain" width={250} height={300} />}
                <div className={styles.icon} onClick={() => addToCard()}>
                    <FiPlus size={"10px"}/>
                </div>
            </div>
            <div className={styles.label}>
                {shoe.title}
                <div className={styles.price}>
                    {shoe.retailPrice + '€'}
                </div>
            </div>
        </div>
    );
}

export default ItemShop;