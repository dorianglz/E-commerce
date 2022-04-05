import React from "react";
import { FiMenu } from "react-icons/fi";
import IconBtn from "../reusable/iconBtn";
import Image from 'next/image'
import logo from "../../assets/logo.png";
import styles from "./navbar.module.css";
import ActionMenu from "./actionMenu";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <IconBtn icon={<FiMenu size={"20px"}/>} onClick={() => {}}/>
            <Image src={logo} alt="logo" height={36} objectFit="contain" quality={20}/>
            <ActionMenu />
        </div>
    );
}

export default Navbar;