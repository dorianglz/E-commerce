import React from "react";
import styles from "./headerImg.module.css";
import textStyle from "../../styles/textStyle.module.css";
import Image from 'next/image'
import Jordan1Image from '../../assets/jordan-1.png'

const HeaderImage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={textStyle.title}>Lightning Fast Shipping</h1>
                <h2 className={textStyle.secondTitle}>From Our Haus To Yours</h2>
            </div>
            <div className={styles.imageContainer}>
                <Image src={Jordan1Image} alt="Jordan 1" style={{borderRadius: 40}} objectFit="contain" quality={100}/>
            </div>
        </div>
    );
}

export default HeaderImage;