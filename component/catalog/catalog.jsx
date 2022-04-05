import React from "react";
import styles from "./catalog.module.css";
import ItemShop from "../ItemShop/ItemShop";

const Catalog = ({ data, length = 8 }) => {
    let error = 0;

    return (
        <div className={styles.container}>
            {data.results.map((item, index) => {
                if (item.media.imageUrl === null) {
                    error++;
                    return null;
                }
                return index < length + error && <ItemShop key={index} item={item} />
            }
            )}
        </div>
    );
};

export default Catalog;